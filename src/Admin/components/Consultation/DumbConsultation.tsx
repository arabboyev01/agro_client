import { Fragment, FC } from "react"
import TableComponent from "../Table"
import ComponentHeader from "../ComponentHeader"
import { PlantTypeProp } from "@/Admin/types"
import { dataSet, consultationColumn, ConsultationType } from "./data"

const DumbOrders: FC<PlantTypeProp<ConsultationType>> = ({ navigate, navigateTo, data }) => (
    <Fragment>
        <ComponentHeader title="Add Consultant" onClick={() => navigate && navigate("/admin/consulation/add")} />
        <TableComponent user={dataSet(data)} column={consultationColumn} navigateTo={navigateTo}/>
    </Fragment>
)
export default DumbOrders