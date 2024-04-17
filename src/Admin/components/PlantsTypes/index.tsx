import Router from "@/hooks/router"
import DumbPlantsType from "./DumbPlantsType"
import { useCallback, useEffect, useState } from "react"
import { api } from "@/api"

const PlantsType = () => {

    const { navigate } = Router()
    const [data, setData] = useState([])

    const getPlantType = useCallback(() => {
        api.getData("plants-types").then((data) => setData(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const navigateTo = (id: number) => {
        navigate(`/admin/plants-type/edit/${id}`)
    }

    return <DumbPlantsType navigateTo={navigateTo} navigate={navigate} data={data} />
}
export default PlantsType