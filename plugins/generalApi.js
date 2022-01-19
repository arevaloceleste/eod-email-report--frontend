export default function (context, inject) {

    inject('generalApi', {   
        unWrap,
        getErrorResponse,
        getSuccessResponse
    })
    
    
    async function unWrap(response) {
        const json = await response.json()
        const { ok, status, statusText } = response
    
    
        return {
            json,
            ok,
            status,
            statusText
        }
    }

    function getSuccessResponse(response) {
        return {
            ok: true,
            json: response,
            status: 200,
            statusText: "OK"
        }
    }
    
    function getErrorResponse(error) {
        return {
            ok: false,
            json: {},
            status: 500,
            statusText: error.message
        }
    }

}