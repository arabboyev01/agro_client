import { FC, Fragment } from "react";
import ComponentHeader from "../../ComponentHeader";
import MapUI from "../Map";
import MyHOCComponent from "./HOC";

const DumbGetMap: FC<any> = ({ navigate, mapCenter, setMapCenter }) => (
  <Fragment>
    <ComponentHeader title="Add Map Information" onClick={() => navigate && navigate("/admin/map/add")} />
    <div style={{ marginTop: "20px" }}>
      <MapUI height={80} MapContent={MyHOCComponent} mapCenter={mapCenter} setMapCenter={setMapCenter} />
    </div>
  </Fragment>
)
export default DumbGetMap