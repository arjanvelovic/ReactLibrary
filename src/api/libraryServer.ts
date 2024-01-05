const token = '6d02296c238dcfaee5b89cb1b7ce15d0057b0de0b7fe45b9'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://libraryapi-0q52.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    getsingle: async (id: string) => { 
        const response = await fetch(`https://libraryapi-0q52.onrender.com/api/books/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
}