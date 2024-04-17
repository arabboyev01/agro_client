import Router from "@/hooks/router"
import DumbPlant from "./DumbPlants"
import { useCallback, useEffect, useState } from "react"
import { api } from "@/api"

const Plants = () => {

    const { navigate } = Router()
    const [data, setData] = useState([])

    const getPlantType = useCallback(() => {
        api.getData("plant").then((data) => setData(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])

    const navigateTo = (id: number) => {
        navigate(`/admin/plants/edit/${id}`)
    }

    return <DumbPlant navigateTo={navigateTo} navigate={navigate} data={data} />
}
export default Plants