import { Language } from "@/hooks/language"
import DumbSideabar from "./DumbSidebar"
import Router from "@/hooks/router"

const SIdebarComponent = () => {
    
    const { navigate } = Router()
    const { lang } = Language()

    return <DumbSideabar handleRouter={navigate} l={lang}/>
}
export default SIdebarComponent