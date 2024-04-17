import { Fragment, FC } from "react"
import ComponentHeader from "../ComponentHeader"
import TableComponent from "../Table"
import { ordersColumns, dataSet } from "./data"
import { OrderType } from "@/Admin/types"

interface Props { navigate: (route: string) => void , navigateTo: (id: number) => void, data: OrderType[] }

const DumbOrders: FC<Props> = ({ navigate, navigateTo, data }) => (
    <Fragment>
        <ComponentHeader title="Add Orders" onClick={() => navigate && navigate("/admin/orders/add")} />
        <TableComponent user={dataSet(data)} navigateTo={navigateTo} column={ordersColumns}/>
    </Fragment>
)
export default DumbOrders