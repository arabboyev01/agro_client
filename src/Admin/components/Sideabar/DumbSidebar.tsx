import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { cilHome, cilPuzzle, cilFlower, cilWrapText, cilWc, cilUser, cilEco, cilGlobeAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { FC } from "react"
import { TFunction } from 'i18next';

const DumbSideabar: FC<{ handleRouter: (route: string) => void, l: TFunction<"translation", undefined>, }> = ({ handleRouter,l }) => (
    <CSidebar style={{height: "100vh"}}>
        <CSidebarBrand>Space Agro</CSidebarBrand>
        <CSidebarNav>
            <CNavTitle style={{ textTransform: "uppercase"}}>{l("side")}</CNavTitle>
            <CNavItem style={{ textTransform: "uppercase"}} onClick={() => handleRouter("/admin")} href="#">
                <CIcon customClassName="nav-icon" icon={cilHome} />
                {l("home")}
            </CNavItem>
            <CNavItem style={{ textTransform: "uppercase" }}  onClick={() => handleRouter("/admin/products")} href="#">
                <CIcon customClassName="nav-icon" icon={cilFlower} />
                {l("products")}
            </CNavItem>
            <CNavItem style={{ textTransform: "uppercase" }}  onClick={() => handleRouter("/admin/orders")} href="#">
                <CIcon customClassName="nav-icon" icon={cilWrapText} />
                {l("orders")}
            </CNavItem>
            <CNavItem style={{ textTransform: "uppercase" }}  onClick={() => handleRouter("/admin/consulation")} href="#">
                <CIcon customClassName="nav-icon" icon={cilWc} />
                {l("consultants")}
            </CNavItem>
            <CNavItem style={{ textTransform: "uppercase" }}  onClick={() => handleRouter("/admin/users")} href="#">
                <CIcon customClassName="nav-icon" icon={cilUser} />
                {l("users")}
            </CNavItem>
            <CNavItem style={{ textTransform: "uppercase" }}  onClick={() => handleRouter("/admin/plants")} href="#">
                <CIcon customClassName="nav-icon" icon={cilEco} />
                {l("plants")}
            </CNavItem>
            <CNavItem style={{ textTransform: "uppercase" }}  onClick={() => handleRouter("/admin/map")} href="#">
                <CIcon customClassName="nav-icon" icon={cilGlobeAlt} />
                {l("map")}
            </CNavItem>
            <CNavGroup toggler={l("side")}>
                <CNavItem style={{ textTransform: "uppercase" }} href="#" onClick={() => handleRouter("/admin/plants-category")}>
                    <CIcon customClassName="nav-icon" icon={cilPuzzle} /> {l("category")}
                </CNavItem>
                <CNavItem style={{ textTransform: "uppercase" }}  href="#" onClick={() => handleRouter("/admin/plants-type")}>
                    <CIcon customClassName="nav-icon" icon={cilPuzzle} /> {l("type")}
                </CNavItem>
            </CNavGroup>
        </CSidebarNav>
        <CSidebarToggler />
    </CSidebar>
)
export default DumbSideabar
