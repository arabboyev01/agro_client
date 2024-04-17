import { Fragment, FC } from "react"
import TableComponent from "../Table"
import ComponentHeader from "../ComponentHeader"

const DumbOrders: FC<{ navigate: (route: string) => void }> = ({ navigate }) => (
    <Fragment>
        <ComponentHeader title="Add Consultant" onClick={() => navigate && navigate("/admin/consulation/add")} />
        <TableComponent user={[]} column={null} navigate={() => navigate("/admin/consulation/edit")}/>
    </Fragment>
)
export default DumbOrders