import Router from "@/hooks/router"
import DumbGetMap from "./DumbAddMap"
import { useState } from "react"

const GetMap = () => {

    const { navigate } = Router()

    const [mapCenter, setMapCenter] = useState<{ lat: number, lng: number }>({ lat: 40.7686, lng: 72.2364 })

    const navigateTo = (id: number) => {
        navigate(`/admin/map/edit/${id}`)
    }

    return <DumbGetMap navigateTo={navigateTo} navigate={navigate} mapCenter={mapCenter} setMapCenter={setMapCenter}/>
}
export default GetMap