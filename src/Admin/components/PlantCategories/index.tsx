import Router from "@/hooks/router"
import DumbPlant from "./DumbPlant"
import { useCallback, useEffect, useState } from "react"
import { api } from "@/api"

const PlantType = () => {

    const { navigate } = Router()
    const [data, setData] = useState([])

    const getPlantType = useCallback(() => {
        api.getData("plants-category").then((data) => setData(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])

    const navigateTo = (id: number) => {
        navigate(`/admin/plants-category/edit/${id}`)
    }

    return <DumbPlant navigateTo={navigateTo} navigate={navigate} data={data} />
}
export default PlantType