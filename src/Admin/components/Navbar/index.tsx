import DumbNavbar from "./DumbNavbar"
import Router from "@/hooks/router"

const Navbar = () => {

    const { lastPathname } = Router()
    return <DumbNavbar lastPathname={lastPathname}/>
}
export default Navbar