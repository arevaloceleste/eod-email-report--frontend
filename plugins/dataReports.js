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

    inject('dataReports', {
        getReportsByProjectIDandDate,
        saveReport,
    })
    async function getReportsByProjectIDandDate(projectID, date) {
        try {
            const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reports/query`, {
                headers,
                method: 'POST',
                body: JSON.stringify({
                    facetFilters: [
                        `project_id:${projectID}`, `date_sent:${date}`
                    ]
                })
            })
            console.log(response)
            return $generalApi.unWrap(response)
        } catch (error) {
            console.log(error)
            return $generalApi.getErrorResponse(error)
        }
    }

    async function saveReport(reportObject) {
        try {
            const index = client.initIndex('reports')

            const response = await index.saveObject(reportObject, { autoGenerateObjectIDIfNotExist: true })
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }
}
