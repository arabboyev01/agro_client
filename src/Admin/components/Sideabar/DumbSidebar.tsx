import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import { cilHome, cilPuzzle, cilFlower, cilWrapText, cilWc, cilUser, cilEco, cilGlobeAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { FC } from "react"

const DumbSideabar: FC<{ handleRouter: (route: string) => void }> = ({ handleRouter }) => (
    <CSidebar style={{height: "100vh"}}>
        <CSidebarBrand>Space Agro</CSidebarBrand>
        <CSidebarNav>
            <CNavTitle>SIDEBAR</CNavTitle>
            <CNavItem  onClick={() => handleRouter("/admin")} href="#">
                <CIcon customClassName="nav-icon" icon={cilHome} />
                HOME
            </CNavItem>
            <CNavItem  onClick={() => handleRouter("/admin/products")} href="#">
                <CIcon customClassName="nav-icon" icon={cilFlower} />
                PRODUCTS
            </CNavItem>
            <CNavItem  onClick={() => handleRouter("/admin/orders")} href="#">
                <CIcon customClassName="nav-icon" icon={cilWrapText} />
                ORDERS
            </CNavItem>
            <CNavItem  onClick={() => handleRouter("/admin/consulation")} href="#">
                <CIcon customClassName="nav-icon" icon={cilWc} />
                CONSULTANTS
            </CNavItem>
            <CNavItem onClick={() => handleRouter("/admin/users")} href="#">
                <CIcon customClassName="nav-icon" icon={cilUser} />
                USERS
            </CNavItem>
            <CNavItem  onClick={() => handleRouter("/admin/plants")} href="#">
                <CIcon customClassName="nav-icon" icon={cilEco} />
                PLANTS
            </CNavItem>
            <CNavItem  onClick={() => handleRouter("/admin/map")} href="#">
                <CIcon customClassName="nav-icon" icon={cilGlobeAlt} />
                MAP
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
