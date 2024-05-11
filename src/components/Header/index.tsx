import { useLayoutEffect, useState } from "react"
import DumbHeader from "./DumbHeader"
import { Language } from "@/hooks/language"
import { useRouter } from "next/router"
import useMediaQuery from "@/hooks/mediaQuery"

const HeaderComponent = () => {

    const router = useRouter()
    const [lan, setLang] = useState('uz')
    const { lang, l } = Language("home")

    const handleRoute = (route: string) => router.push(route)

    useLayoutEffect(() => {
        setLang(l)
    }, [l])

    const isMobile = useMediaQuery('(max-width: 768px)')

    return <DumbHeader lan={lan} setLang={setLang} lang={lang} handleRoute={handleRoute} isMobile={isMobile}/>
}
export default HeaderComponent