import { useLayoutEffect, useState } from "react"
import DumbHeader from "./DumbHeader"
import i18next from 'i18next'
import { Language } from "@/hooks/language"
import { useRouter } from "next/router"
import useMediaQuery from "@/hooks/mediaQuery"

const HeaderComponent = () => {

    const router = useRouter()
    const [lan, setLang] = useState('uz')
    const { lang } = Language()

    const handleRoute = (route: string) => router.push(route)

    const isMobile = useMediaQuery('(max-width: 768px)')

    useLayoutEffect(() => {
        setLang(i18next?.language || 'en')
    }, [])

    return <DumbHeader lan={lan} setLang={setLang} lang={lang} handleRoute={handleRoute} isMobile={isMobile}/>
}
export default HeaderComponent