import { FC, ReactNode } from "react"
import HeaderComponent from "../Header"
import { StyleLayout } from "./style.layout"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <StyleLayout>
            <HeaderComponent />
            {children}
        </StyleLayout>
    )
}
export default Layout