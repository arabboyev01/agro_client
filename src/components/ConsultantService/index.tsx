import { Language } from "@/hooks/language"
import DumbConsultant from "./DUmbConsultant"

const ConsultantService = () => {

    const { lang } = Language()
    
    return <DumbConsultant lang={lang} />
}
export default ConsultantService