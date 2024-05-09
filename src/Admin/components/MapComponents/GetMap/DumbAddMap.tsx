import { FC, Fragment } from "react";
import ComponentHeader from "../../ComponentHeader";

const DumbGetMap: FC<any> = ({ navigate, navigateTo}) => (
  <Fragment>
    <ComponentHeader title="Add Map Information" onClick={() => navigate && navigate("/admin/map/add")} />
  </Fragment>
)
export default DumbGetMap