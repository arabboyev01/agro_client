import Router from "@/hooks/router"
import DumbConsultation from "./DumbConsultation"
import { getData } from "@/api/custom"
import { useQuery } from "react-query"

const ConsultationComponent = () => {
    const { navigate } = Router()

    const navigateTo = (id: number) => {
        navigate(`/admin/consulation/edit/${id}`)
    }

    const { data } = useQuery('consultant', () => getData('consultant'))

    return <DumbConsultation navigate={navigate} navigateTo={navigateTo} data={data?.data}/>
}
export default ConsultationComponent