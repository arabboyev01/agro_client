import { Language } from "@/hooks/language"
import DumbHomePage from "./DumbHome"
import { useRouter } from "next/router"

const HomeComponent = () => {
    const router = useRouter()
    const { lang } = Language()

    const handleRoute = (route: string) => router.push(route)

    return <DumbHomePage lang={lang} handleRoute={handleRoute}/>
}
export default HomeComponent