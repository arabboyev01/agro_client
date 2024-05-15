import Router from "@/hooks/router"
import DumbGetMap from "./DumbAddMap"
import { useCallback, useEffect, useState } from "react"
import { api } from "@/api"
import { Language } from "@/hooks/language"

const GetMap = () => {

    const { navigate } = Router()
    const { l } = Language("")

    const [mapCenter, setMapCenter] = useState<{ lat: number, lng: number }>({ lat: 40.7686, lng: 72.2364 })
    const [mapData, setMapData] = useState([])
    const [visible, setVisible] = useState(false)
    const [singleData, setSingleData] = useState({})

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

    const getSingleMapData = (id: number) => {
        setVisible(true)
        api.authGet(`map/${id}`).then((data) => setSingleData(data.data))
            .catch(err => console.log(err))
    }

    const handleCloseModal = () => {
        setVisible(false)
        setSingleData({})
    }
    console.log(singleData)

    return <DumbGetMap
        navigateTo={navigateTo}
        navigate={navigate}
        mapCenter={mapCenter}
        setMapCenter={setMapCenter}
        mapData={mapData}
        getSingleMapData={getSingleMapData}
        visible={visible}
        singleData={singleData}
        l={l}
        handleCloseModal={handleCloseModal}
    />
}
export default GetMap