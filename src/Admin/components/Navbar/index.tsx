import { useState } from "react"
import DumbNavbar from "./DumbNavbar"
import Router from "@/hooks/router"

const Navbar = () => {

    const { lastPathname } = Router()

    const [lang, setLang] = useState('uz');

    return <DumbNavbar lastPathname={lastPathname} lang={lang} setLang={setLang}/>
}
export default Navbar