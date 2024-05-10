import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: { text: string, lat?: number, lng?: number }) => (
    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
)

const MapUI = ({ height }: { height: number }) => {

    const defaultProps = {
        center: {
            lat: 40.7686,
            lng: 72.2364
        },
        zoom: 12
    }
    return (
        <div style={{ height: `${height}vh`, width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyB_n5qZs5s-gTWDmxB4GwlogzL0UwUx6c0" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}
export default MapUI
