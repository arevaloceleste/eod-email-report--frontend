export default function ({ $generalApi, $dataUsers }, inject) {
    const appId = 'QVDI3V567X'
    const apiKey = '00ee1c2057bc4cd6d5cfcdd618d4e09f'
    const masterKey = '80845dbe4fec63effea7bc78246a3b52'
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,

    }

    const algoliasearch = require('algoliasearch')
    const client = algoliasearch(appId, masterKey)

    inject('dataProjects', {
        getProject,
        getProjects,
        getProjectsByLeadId,
        getProjectsByUserId,
        addProject,
        addContactToProject
    })

    async function getProject(projectID) {
        try {
            const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/projects/${projectID}`, {
                headers

            })
            return $generalApi.unWrap(response)

        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }

    }

    async function getProjects() {
        try {
            const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/projects`, {
                headers
            })
            return $generalApi.unWrap(response)

        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }

    }

    async function getProjectsByLeadId(leadID) {
        try {
            try {
                const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/projects/query`, {
                    headers,
                    method: 'POST',
                    body: JSON.stringify({ filters: `lead_id:${leadID}` })
                })
                return $generalApi.unWrap(response)
            } catch (error) {
                return $generalApi.getErrorResponse(error)
            }

        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }
    }


    async function getProjectsByUserId(userID) {
        try {
            const userResponse = await $dataUsers.getUser(userID)
            if (userResponse.ok) {
                const projectsIds = []
                userResponse.json.projects.forEach(projectID => {
                    projectsIds.push(`objectID:${projectID}`)
                });

                const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/projects/query`, {
                    headers,
                    method: 'POST',
                    body: JSON.stringify({
                        facetFilters: [
                            projectsIds
                        ]
                    })
                })
                return $generalApi.unWrap(response)

            } else {
                return $generalApi.getErrorResponse(userResponse)
            }

        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }
    }

    async function addProject(projectObject) {
        try {
            const index = client.initIndex('projects')

            const response = await index.saveObject(projectObject, { autoGenerateObjectIDIfNotExist: true })

            return $generalApi.getSuccessResponse(response)
        } catch (error) {
            console.log(error)
        }
    }


    async function addContactToProject(projectID, contactEmail) {
        try {
            const index = client.initIndex('projects')
            const response = await index.partialUpdateObject({
                email: {
                    _operation: 'Add',
                    value: contactEmail,
                },
                objectID: projectID,
            })
            return $generalApi.getSuccessResponse(response)
        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }

    }

}