import { Fragment, FC } from "react"
import TableComponent from "../Table"
import { PlantTypeProp } from "@/Admin/types"
import ComponentHeader from "../ComponentHeader"
import { dataSet, plantsTypeColumns } from "./data"

const DumbPlantsType: FC<PlantTypeProp<any>> = ({ navigate, data, navigateTo }) => (
    <Fragment>
        <ComponentHeader title="Add Plant Category" onClick={() => navigate && navigate("/admin/plants-type/add")} />
        <TableComponent user={dataSet(data)} column={plantsTypeColumns} navigateTo={navigateTo}/>
    </Fragment>
)
export default DumbPlantsType