import Router from "@/hooks/router"
import DumbGetMap from "./DumbAddMap"
import { useCallback, useEffect, useState } from "react"
import { api } from "@/api"

const GetMap = () => {

    const { navigate } = Router()

    const [mapCenter, setMapCenter] = useState<{ lat: number, lng: number }>({ lat: 40.7686, lng: 72.2364 })
    const [mapData, setMapData] = useState([])

    const navigateTo = (id: number) => {
        navigate(`/admin/map/edit/${id}`)
    }

    const fetchMapInformation = useCallback(() => {
        api.authGet('map').then((data) => setMapData(data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetchMapInformation()
    }, [fetchMapInformation])
    console.log(mapData)

    const getSingleMapData = (id: number) => {
        api.authGet(`map/${id}`).then((data) => console.log(data.data))
            .catch(err => console.log(err))
    }

    return <DumbGetMap
        navigateTo={navigateTo}
        navigate={navigate}
        mapCenter={mapCenter}
        setMapCenter={setMapCenter}
        mapData={mapData}
        getSingleMapData={getSingleMapData}
    />
}
export default GetMap