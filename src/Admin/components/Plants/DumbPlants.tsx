import { Fragment, FC } from "react"
import ComponentHeader from "../ComponentHeader"
import TableComponent from "../Table"
import { PlantTypeProp, PlantsType } from "@/Admin/types"
import { dataSet, plantsTypeColumns } from "./data"

const DumbPlantsType: FC<PlantTypeProp<PlantsType>> = ({ navigate, data, navigateTo }) => (
    <Fragment>
        <ComponentHeader title="Add Plant Type" onClick={() => navigate && navigate("/admin/plants/add")} />
        <TableComponent user={dataSet(data)} column={plantsTypeColumns} navigateTo={navigateTo}/>
    </Fragment>
)
export default DumbPlantsType