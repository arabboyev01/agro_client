import { FC } from "react";
import LocationSVG from '@/assets/location.png'
 type props = {
     onClick: (id: number) => void
     id: number
 }
const MyHOCComponent: FC<props> = ({ onClick, id }) => { 
    return <div style={{ cursor: "pointer" }} onClick={() => onClick(id)}>
        <img src={LocationSVG.src} alt="Selected Icon" style={{ width: '30px', height: '30px' }} />
    </div>
}
export default MyHOCComponent