import { api } from "@/api"
import Router from "@/hooks/router"
import { useState, useCallback, useEffect } from "react"
import ComponentHeader from "../ComponentHeader"
import { StyledProducts } from "../Products/style.products"
import TableComponent from "../Table"
import { regionsColumn } from "./data"

const Districts = () => {
    const { navigate } = Router()
    const [data, setData] = useState([])

    const getPlantType = useCallback(() => {
        api.getData("district").then((data) => setData(data.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])


    const navigateTo = (id: number) => {
        navigate(`/admin/districts/edit/${id}`)
    }

    return (
        <StyledProducts>
            <ComponentHeader title="Add Product" onClick={() => navigate && navigate("/admin/districts/add")} />
            <TableComponent user={data} navigateTo={navigateTo} column={regionsColumn} />
        </StyledProducts>
    )
}
export default Districts