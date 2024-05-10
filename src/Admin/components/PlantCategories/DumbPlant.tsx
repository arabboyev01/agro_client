import { Fragment, FC } from "react"
import ComponentHeader from "../ComponentHeader"
import TableComponent from "../Table"
import { PlantTypeProp } from "@/Admin/types"
import { dataSet, plantsTypeColumns } from "./data"

const DumbPlantsType: FC<PlantTypeProp<any>> = ({ navigate, data, navigateTo }) => (
    <Fragment>
        <ComponentHeader title="Add Category" onClick={() => navigate && navigate("/admin/plants-category/add")} />
        <TableComponent user={dataSet(data)} column={plantsTypeColumns} navigateTo={navigateTo}/>
    </Fragment>
)
export default DumbPlantsType