import { FC, Fragment } from "react";
import ComponentHeader from "../../ComponentHeader";
import MapUI from "../Map";

const DumbGetMap: FC<any> = ({ navigate, navigateTo}) => (
  <Fragment>
    <ComponentHeader title="Add Map Information" onClick={() => navigate && navigate("/admin/map/add")} />
    <div style={{ marginTop: "20px"}}>
      <MapUI height={80}/>
    </div>
  </Fragment>
)
export default DumbGetMap