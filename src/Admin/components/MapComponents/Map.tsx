import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import { LocationType, MyContentProps } from '@/Admin/types';

type MyContentComponent = React.ComponentType<MyContentProps|any>

type ConponentProps = {
    height: number
    MapContent: MyContentComponent|any
    mapCenter: { lat: number, lng: number }
    setMapCenter: (value: { lat: number, lng: number }) => void
    mapData: LocationType[]
    onClick: (id: number) => void
}

const MapUI = ({ height, MapContent, mapCenter, setMapCenter, mapData, onClick }: ConponentProps) => {

    const [selectedArea, setSelectedArea] = useState<{ lat: number, lng: number } | null>(null);
    const [isActive, setIsActive] = useState(false)

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
                bootstrapURLKeys={{ key: "AIzaSyB_n5qZs5s-gTWDmxB4GwlogzL0UwUx6c0" }}
                defaultCenter={mapCenter}
                defaultZoom={currentZoom}
                yesIWantToUseGoogleMapApiInternals
                onClick={handleMapClick}
                onZoomAnimationStart={(maps) => handleZoomChange(maps)}
                onZoomAnimationEnd={(maps) => handleZoomChange(maps)}
            >
                {mapData && mapData.length ? (
                    mapData.map((item: LocationType) => (
                        <MapContent
                            lat={Number(item.lat)}
                            lng={Number(item.long)}
                            isSelected={true}
                            key={item.id}
                            onClick={onClick}
                            id={item.id}
                        />
                    ))
                ) : (
                    <MapContent
                        lat={selectedArea?.lat}
                        lng={selectedArea?.lng}
                        isSelected={isActive}
                    />
                )}
            </GoogleMapReact>

        </div>
    )
}
export default MapUI
