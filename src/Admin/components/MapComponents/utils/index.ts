export const getCoordinatesFromAddress = async (address: string): Promise<any> => {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyB_n5qZs5s-gTWDmxB4GwlogzL0UwUx6c0`)
        const data = await response.json()
        if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location
            return { lat, lng }
        } else {
            return null
        }
    } catch (error) {
        return null
    }
}
