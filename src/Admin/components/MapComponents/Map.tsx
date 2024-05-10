/* eslint-disable @next/next/no-img-element */
import GoogleMapReact from 'google-map-react'
import { useCallback, useEffect, useState } from 'react'
import { MyContentProps } from '@/Admin/types';
import { getCoordinatesFromAddress } from './utils';

type MyContentComponent = React.ComponentType<MyContentProps>

const MapUI = ({ height, MapContent, searchValue }: { height: number, searchValue: string, MapContent: MyContentComponent }) => {

    const [selectedArea, setSelectedArea] = useState<{ lat: number, lng: number } | null>(null);
    const [isActive, setIsActive] = useState(false)
    const [mapCenter, setMapCenter] = useState<{ lat: number, lng: number }>({ lat: 40.7686, lng: 72.2364 })

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
    }

    return (
        <div style={{ height: `${height}vh`, width: '100%' }}>
            <GoogleMapReact
                key={`${mapCenter.lat}-${mapCenter.lng}`}
                bootstrapURLKeys={{ key: "AIzaSyB_n5qZs5s-gTWDmxB4GwlogzL0UwUx6c0" }}
                defaultCenter={mapCenter} 
                defaultZoom={12}
                yesIWantToUseGoogleMapApiInternals
                onClick={handleMapClick}
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
