import { useEffect, useState } from "react"
import DumbHeader from "./DumbHeader"
import i18next from 'i18next'
import { Language } from "@/hooks/language"
import { useRouter } from "next/router"

const HeaderComponent = () => {

    const router = useRouter()
    const [lan, setLang] = useState('en')
    const { lang } = Language()

    const handleRoute = (route: string) => router.push(route)

    useEffect(() => {
        setLang(i18next?.language || 'en')
    }, [])

    return <DumbHeader lan={lan} setLang={setLang} lang={lang} handleRoute={handleRoute}/>
}
export default HeaderComponent