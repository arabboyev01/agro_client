import { useLayoutEffect, useState } from "react"
import DumbHeader from "./DumbHeader"
import { Language } from "@/hooks/language"
import { useRouter } from "next/router"
import useMediaQuery from "@/hooks/mediaQuery"
import { api } from "@/api"

const HeaderComponent = () => {

    const router = useRouter()
    const [lan, setLang] = useState('uz')
    const { lang, l } = Language("home")
    const [loader, setLoader] = useState(false)

    const handleRoute = () => {
        setLoader(true)
        api.authGet('user').then(data => {
            if (data?.success) {
                setLoader(false)
                const { user } = data
                if (user.role === "USER") {
                    router.push('/user-map')
                } else if (user.role === 'ADMIN') {
                    router.push('/admin')
                }
            } else {
                router.push('/login')
                setLoader(false)
            }
        })
            .catch(err => console.log(err))
    }

    useLayoutEffect(() => {
        setLang(l)
    }, [l])

    const isMobile = useMediaQuery('(max-width: 768px)')

    return <DumbHeader lan={lan} setLang={setLang} lang={lang} handleRoute={handleRoute} isMobile={isMobile} router={router} loader={loader}/>
}
export default HeaderComponent