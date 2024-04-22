import { useRouter } from "next/router"
import DumbVarities from "./DUmbVarities"
import { Language } from "@/hooks/language"

const VaritiesComponent = () => {

    const router = useRouter()
    const { lang } = Language()

    const handleRoute = (route: string) => router.push(route)
    
    return <DumbVarities lang={lang} handleRoute={handleRoute}/>
}
export default VaritiesComponent