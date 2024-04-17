import { useCallback, useEffect, useState } from "react"
import DumbProducts from "./DumbProducts"
import { api } from "@/api"
import Router from "@/hooks/router"
import { columns } from "./column"

const UsersComponent = () => {

    const [user, setUser] = useState([])
    const { navigate } = Router()

    const fetchData = useCallback(() => {
        api.getData("user").then((data) => setUser(data?.user))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const navigateTo = (id: number) => {
        navigate(`/admin/users/edit/${id}`)
    }

    return <DumbProducts user={user} navigateTo={navigateTo} navigate={navigate} column={columns}/>
}
export default UsersComponent