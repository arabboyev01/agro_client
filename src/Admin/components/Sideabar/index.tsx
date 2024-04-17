import DumbSideabar from "./DumbSidebar"
import Router from "@/hooks/router"

const SIdebarComponent = () => {
    
    const { navigate } = Router()

    return <DumbSideabar handleRouter={navigate}/>
}
export default SIdebarComponent