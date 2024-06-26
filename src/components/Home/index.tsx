import { Language } from "@/hooks/language"
import DumbHomePage from "./DumbHome"
import { useRouter } from "next/router"
import { useScopedI18n } from "@/features/locales"

const HomeComponent = () => {
    const router = useRouter()
    const { lang } = Language("home")
    const handleRoute = (route: string) => router.push(route)

    const callButton = () => {
        window.location.href = 'tel:+998951203322'
    }

    return <DumbHomePage lang={lang} handleRoute={handleRoute} callButton={callButton}/>
}
export default HomeComponent