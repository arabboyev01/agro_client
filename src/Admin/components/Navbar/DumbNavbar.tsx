import { CAvatar } from "@coreui/react"
import * as S from "./style.navbar"
import { FC } from "react"
import MainDropdown from "@/components/Dropdown/MainDropdown"
import { LanData } from "@/components/Header/data"

const DumbNavbar: FC<{ lastPathname: string }> = ({ lastPathname }) => (
    <S.StyleNavbar>
        <S.Title>{lastPathname}</S.Title>
        <S.Lan>
            <CAvatar color="primary" textColor="white" size="md">A</CAvatar>
        </S.Lan>
    </S.StyleNavbar>
)
export default DumbNavbar