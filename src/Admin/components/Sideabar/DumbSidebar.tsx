import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { cilHome, cilPuzzle, cilFlower, cilWrapText, cilWc, cilUser, cilEco, cilGlobeAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { FC } from "react"
import { TFunction } from 'i18next';

const DumbSideabar: FC<{ handleRouter: (route: string) => void, l: TFunction<"translation", undefined>, }> = ({ handleRouter,l }) => (
    <CSidebar style={{height: "100vh"}}>
        <CSidebarBrand>Space Agro</CSidebarBrand>
        <CSidebarNav>
            {/* <CNavTitle style={{ textTransform: "uppercase"}}>{l("sidebar.side")}</CNavTitle> */}
            <CNavItem  onClick={() => handleRouter("/admin")} href="#">
                <CIcon customClassName="nav-icon" icon={cilHome} />
                {l("sidebar.home")}
            </CNavItem>
            <CNavItem onClick={() => handleRouter("/admin/products")} href="#">
                <CIcon customClassName="nav-icon" icon={cilFlower} />
                {l("sidebar.products")}
            </CNavItem>
            <CNavItem onClick={() => handleRouter("/admin/orders")} href="#">
                <CIcon customClassName="nav-icon" icon={cilWrapText} />
                {l("sidebar.orders")}
            </CNavItem>
            <CNavItem onClick={() => handleRouter("/admin/consulation")} href="#">
                <CIcon customClassName="nav-icon" icon={cilWc} />
                {l("sidebar.consultants")}
            </CNavItem>
            <CNavItem onClick={() => handleRouter("/admin/users")} href="#">
                <CIcon customClassName="nav-icon" icon={cilUser} />
                {l("sidebar.users")}
            </CNavItem>
            <CNavItem onClick={() => handleRouter("/admin/plants")} href="#">
                <CIcon customClassName="nav-icon" icon={cilEco} />
                {l("sidebar.plants")}
            </CNavItem>
            <CNavItem onClick={() => handleRouter("/admin/map")} href="#">
                <CIcon customClassName="nav-icon" icon={cilGlobeAlt} />
                {l("sidebar.map")}
            </CNavItem>
            <CNavGroup toggler={l("sidebar.side")}>
                <CNavItem  href="#" onClick={() => handleRouter("/admin/plants-category")}>
                    <CIcon customClassName="nav-icon" icon={cilPuzzle} /> {l("sidebar.category")}
                </CNavItem>
                <CNavItem href="#" onClick={() => handleRouter("/admin/plants-type")}>
                    <CIcon customClassName="nav-icon" icon={cilPuzzle} /> {l("sidebar.type")}
                </CNavItem>
            </CNavGroup>
        </CSidebarNav>
        <CSidebarToggler />
    </CSidebar>
)
export default DumbSideabar
