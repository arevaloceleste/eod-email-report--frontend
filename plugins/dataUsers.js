export default function ({ $generalApi }, inject) {
    const appId = 'QVDI3V567X'
    const apiKey = '00ee1c2057bc4cd6d5cfcdd618d4e09f'
    const masterKey = '80845dbe4fec63effea7bc78246a3b52'
    const headers = {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,

    }

    const algoliasearch = require('algoliasearch')
    const client = algoliasearch(appId, masterKey)

    inject('dataUsers', {
        getUser,
        getUsers,
        getUsersByProjectID,
        addUser,
        addProjectToUser
    })

    async function getUser(userId) {
        try {
            const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/${userId}`, {
                headers
            })
            return $generalApi.unWrap(response)

        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }

    }

    async function getUsers() {
        try {
            const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/`, {
                headers
            })
            return $generalApi.unWrap(response)

        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }
    }

    async function getUsersByProjectID(projectID) {
        try {
            const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/users/query`, {
                headers,
                method: 'POST',
                body: JSON.stringify({ filters: `projects:${projectID}` })
            })
            return $generalApi.unWrap(response)
        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }
    }

    async function addUser(userObject) {

        try {
            const index = client.initIndex('users')

            const response = await index.saveObject(userObject, { autoGenerateObjectIDIfNotExist: true })
            return $generalApi.getSuccessResponse(response)
        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }
    }

    async function addProjectToUser(userID, projectID) {
        try {
            const index = client.initIndex('users')
            const response = await index.partialUpdateObject({
                projects: {
                    _operation: 'AddUnique',
                    value: projectID,
                },
                objectID: userID,
            })
            return $generalApi.getSuccessResponse(response)
        } catch (error) {
            return $generalApi.getErrorResponse(error)
        }
    }
}
