import Router from "@/hooks/router"
import DumbConsultation from "./DumbConsultation"

const ConsultationComponent = () => {
    const { navigate } = Router()

    return <DumbConsultation navigate={navigate} />
}
export default ConsultationComponent