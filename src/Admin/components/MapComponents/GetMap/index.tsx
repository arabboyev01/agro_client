import Router from "@/hooks/router"
import DumbGetMap from "./DumbAddMap"

const GetMap = () => {

    const { navigate } = Router()

    const navigateTo = (id: number) => {
        navigate(`/admin/map/edit/${id}`)
    }
    return <DumbGetMap navigateTo={navigateTo} navigate={navigate}/>
}
export default GetMap