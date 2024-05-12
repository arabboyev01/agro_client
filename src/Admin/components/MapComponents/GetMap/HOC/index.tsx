import { FC, useCallback, useEffect } from "react";
import LocationSVG from '@/assets/location.png'
import { api } from "@/api";

const MyHOCComponent: FC = () => {

    const fetchMapInformation = useCallback(() => {
        api.authGet('map').then((data) => console.log(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetchMapInformation()
    }, [fetchMapInformation])
    
   return <div>
        <img src={LocationSVG.src} alt="Selected Icon" style={{ width: '30px', height: '30px' }} />
    </div>
}
export default MyHOCComponent