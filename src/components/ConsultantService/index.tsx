import { Language } from "@/hooks/language"
import DumbConsultant from "./DUmbConsultant"
import { getData } from "@/api/custom"
import { useQuery } from "react-query"

const ConsultantService = () => {

    const { lang } = Language()
    const { data } = useQuery('consultant', () => getData('consultant'))

    const callButton = (number: string) => window.location.href = `tel:${number}`
    
    return <DumbConsultant lang={lang} data={data?.data} callButton={callButton} />
}
export default ConsultantService