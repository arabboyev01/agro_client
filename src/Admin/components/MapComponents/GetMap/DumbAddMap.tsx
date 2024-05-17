import { FC, Fragment } from "react";
import ComponentHeader from "../../ComponentHeader";
import MapUI from "../Map";
import MyHOCComponent from "./HOC";
import ModalComponent from "../Modal";

const DumbGetMap: FC<any> = ({ navigate, mapCenter, setMapCenter, mapData, getSingleMapData, visible, singleData, l, handleCloseModal, addButton }) => (
  <Fragment>
    {!addButton && <ComponentHeader title="Add Map Information" onClick={() => navigate && navigate("/admin/map/add")} />}
    <div style={{ marginTop: "20px" }}>
      <MapUI height={80} MapContent={MyHOCComponent} mapCenter={mapCenter} setMapCenter={setMapCenter} mapData={mapData} onClick={getSingleMapData} />
    </div>
    <ModalComponent visible={visible} handleCloseModal={handleCloseModal} data={singleData} l={l}/>
  </Fragment>
)
export default DumbGetMap