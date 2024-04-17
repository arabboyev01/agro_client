import Router from "@/hooks/router"
import DumbProducts from "./DumbProducts"
import { api } from "@/api"
import { useState, useCallback, useEffect } from "react"

const ProductsComponent = () => {

    const { navigate } = Router()
    const [data, setData] = useState([])

    const getPlantType = useCallback(() => {
        api.getData("products").then((data) => setData(data.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        getPlantType()
    }, [getPlantType])

 
    const navigateTo = (id: number) => {
        navigate(`/admin/products/edit/${id}`)
    }

    return <DumbProducts navigate={navigate} navigateTo={navigateTo} data={data}/>
}
export default ProductsComponent