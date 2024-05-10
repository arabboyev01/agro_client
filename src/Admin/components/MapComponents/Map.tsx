/* eslint-disable @next/next/no-img-element */
import GoogleMapReact from 'google-map-react'
import { useCallback, useEffect, useState } from 'react'
import { MyContentProps } from '@/Admin/types';
import { getCoordinatesFromAddress } from './utils';

type MyContentComponent = React.ComponentType<MyContentProps>

type ConponentProps = {
    height: number
    searchValue: string
    MapContent: MyContentComponent
    mapCenter: { lat: number, lng: number }
    setMapCenter: (value: { lat: number, lng: number}) => void
}

const MapUI = ({ height, MapContent, searchValue, mapCenter, setMapCenter }: ConponentProps) => {

    const [selectedArea, setSelectedArea] = useState<{ lat: number, lng: number } | null>(null);
    const [isActive, setIsActive] = useState(false)

    const findLocation = useCallback(async () => {
        if (searchValue) {
            const coordinates = await getCoordinatesFromAddress(searchValue) as any
            if (coordinates) {
                setSelectedArea(coordinates)
                setIsActive(true)
                setMapCenter(coordinates)
            }
        }
    }, [searchValue])

    useEffect(() => {
        findLocation()
    }, [findLocation])

    const handleMapClick = (event: any) => {
        setIsActive(true)
        setSelectedArea({ lat: event.lat, lng: event.lng })
        setMapCenter({ lat: event.lat, lng: event.lng })
    }

    const [currentZoom, setCurrentZoom] = useState(12)
    const handleZoomChange = (maps: any) => setCurrentZoom(maps)

    return (
        <div style={{ height: `${height}vh`, width: '100%' }}>
            <GoogleMapReact
                key={`${mapCenter.lat}-${mapCenter.lng}`}
                bootstrapURLKeys={{ key: "AIzaSyB_n5qZs5s-gTWDmxB4GwlogzL0UwUx6c0" }}
                defaultCenter={mapCenter}
                defaultZoom={currentZoom}
                yesIWantToUseGoogleMapApiInternals
                onClick={handleMapClick}
                onZoomAnimationStart={(maps) => handleZoomChange(maps)}
                onZoomAnimationEnd={(maps) => handleZoomChange(maps)}
            >
                <MapContent
                    lat={selectedArea?.lat}
                    lng={selectedArea?.lng}
                    isSelected={isActive}
                />
            </GoogleMapReact>
        </div>
    )
}
export default MapUI
