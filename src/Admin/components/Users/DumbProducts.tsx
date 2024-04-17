import * as S from "./style.products"
import ComponentHeader from "../ComponentHeader"
import TableComponent from "../Table"
import { FC } from "react"
import { ProductsProp } from "@/Admin/types"

const DumbProducts: FC<ProductsProp<any>> = ({ user, navigateTo, navigate, column }) => (
    <S.StyleProducts>
        <ComponentHeader title="Add Users" onClick={() => navigate && navigate("/admin/users/add")}/>
        <TableComponent user={user} column={column} navigateTo={navigateTo}/>
    </S.StyleProducts>
)
export default DumbProducts