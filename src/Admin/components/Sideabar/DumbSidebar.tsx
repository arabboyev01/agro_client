import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { cilHome, cilPuzzle, cilFlower, cilWrapText, cilWc, cilUser, cilEco } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { FC } from "react"

const DumbSideabar: FC<{ handleRouter: (route: string) => void }> = ({ handleRouter }) => (
    <CSidebar style={{height: "100vh"}}>
        {/* <CSidebarBrand>Sidebar Brand</CSidebarBrand> */}
        <CSidebarNav>
            <CNavTitle>SIDEBAR</CNavTitle>
            <CNavItem href="#" onClick={() => handleRouter("/admin")}>
                <CIcon customClassName="nav-icon" icon={cilHome} />
                HOME
            </CNavItem>
            <CNavItem href="#" onClick={() => handleRouter("/admin/products")}>
                <CIcon customClassName="nav-icon" icon={cilFlower} />
                PRODUCTS
            </CNavItem>
            <CNavItem href="#" onClick={() => handleRouter("/admin/orders")}>
                <CIcon customClassName="nav-icon" icon={cilWrapText} />
                ORDERS
            </CNavItem>
            <CNavItem href="#" onClick={() => handleRouter("/admin/consulation")}>
                <CIcon customClassName="nav-icon" icon={cilWc} />
                CONSULTATION
            </CNavItem>
            <CNavItem href="#" onClick={() => handleRouter("/admin/users")}>
                <CIcon customClassName="nav-icon" icon={cilUser} />
                USERS
            </CNavItem>
            <CNavItem href="#" onClick={() => handleRouter("/admin/plants")}>
                <CIcon customClassName="nav-icon" icon={cilEco} />
                PLANTS
            </CNavItem>
            <CNavGroup toggler="Plants">
                <CNavItem href="#" onClick={() => handleRouter("/admin/plants-category")}>
                    <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Plants Category
                </CNavItem>
                <CNavItem href="#" onClick={() => handleRouter("/admin/plants-type")}>
                    <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Plants Type
                </CNavItem>
            </CNavGroup>
        </CSidebarNav>
        {/* <CSidebarToggler /> */}
    </CSidebar>
);

export default DumbSideabar;
