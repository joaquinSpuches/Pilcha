import { useEffect, useState } from 'react'




const useAppwrite = (fn) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fn()
            setData(response)
        } catch (error) {

            console.error(error)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => fetchData()

    return { data, loading, refetch }
}

export default useAppwrite