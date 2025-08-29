export const createResponse = (data,status)=>
    new Response(JSON.stringify(data),
        {
            STATUS: status,
            headers: { 'Content-Type': 'application/json' }

})
