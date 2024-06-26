import { api } from "@/api"
import { useState, useCallback, useEffect } from "react"
import ComponentHeader from "../ComponentHeader"
import { StyledProducts } from "../Products/style.products"
import TableComponent from "../Table"
import Router from "@/hooks/router"
import { regionsColumn } from "./data"

const RegionsComponent = () => {

    const { navigate } = Router()
    const [data, setData] = useState([])

    const getPlantType = useCallback(() => {
        api.getData("region").then((data) => setData(data.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType]) 


    const navigateTo = (id: number) => {
        navigate(`/admin/regions/edit/${id}`)
    }
    
    return (
        <StyledProducts>
            <ComponentHeader title="Add Region" onClick={() => navigate && navigate("/admin/regions/add")} />
            <TableComponent user={data} navigateTo={navigateTo} column={regionsColumn} />
        </StyledProducts>
    )
}
export default RegionsComponent