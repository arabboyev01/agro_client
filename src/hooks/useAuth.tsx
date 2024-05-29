import { useEffect } from 'react'
import Router from './router'

const useAuth = () => {
    const { navigate } = Router()

    useEffect(() => {
        const token = localStorage.getItem('accessToken')

        if (!token) {
            navigate('/login')
        }
    }, [navigate])

    return null
}

export default useAuth