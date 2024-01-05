import { useState, useEffect } from 'react'
import { server_calls } from '../api/libraryServer'

export const useGetDataSingle = (bookId: any) => {
    const [ bookData, setData ] = useState<any>(Object)

    async function handleDataFetch(){
        const result = await server_calls.getsingle(bookId);
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { bookData, getData:handleDataFetch}
}