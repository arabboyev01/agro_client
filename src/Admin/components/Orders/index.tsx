import Router from "@/hooks/router"
import DumbOrders from "./DumbOrders"
import { useQuery } from "react-query"
import { getMethod } from "@/api/custom"

const OrderComponent = () => {
    const { navigate } = Router()

    const navigateTo = (id: number) => {
        navigate(`/admin/orders/edit/${id}`)
    }

    const { data } = useQuery(['products', 'orders'], getMethod)

    return <DumbOrders navigate={navigate} navigateTo={navigateTo} data={data?.data} />
}
export default OrderComponent