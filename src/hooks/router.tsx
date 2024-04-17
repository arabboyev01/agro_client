import { useRouter } from "next/router"

const Router = () => {
    const router = useRouter()
    const { id } = router.query

    const navigate = (route: string) => router.push(route)
    const { pathname } = router
    const lastPathname = pathname.split("/")[pathname.split("/").length-1]

    return { navigate, lastPathname, paramId: id }
}
export default Router