import { Language } from "@/hooks/language"
import DumbHomePage from "./DumbHome"
import { useRouter } from "next/router"

const HomeComponent = () => {
    const router = useRouter()
    const { lang } = Language()

    const handleRoute = (route: string) => router.push(route)

    const callButton = () => {
        window.location.href = 'tel:+998951203322'
    }

    return <DumbHomePage lang={lang} handleRoute={handleRoute} callButton={callButton}/>
}
export default HomeComponent