import { FC } from "react"
import DumbTable from "./DumbTable"
import { ProductsProp } from "@/Admin/types"

const TableComponent: FC<ProductsProp<any>> = ({ user, navigateTo, column }) => {
    return <DumbTable data={user} column={column} navigate={navigateTo}/>
}
export default TableComponent