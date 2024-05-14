import { useLayoutEffect, useState } from "react"
import DumbNavbar from "./DumbNavbar"
import Router from "@/hooks/router"
import { Language } from "@/hooks/language"

const Navbar = () => {

    const { lastPathname } = Router()
    const {l } = Language("")
    const [lang, setLang] = useState('uz')

    useLayoutEffect(() => {
        setLang(l)
    }, [l])

    return <DumbNavbar lastPathname={lastPathname} lang={lang} setLang={setLang}/>
}
export default Navbar