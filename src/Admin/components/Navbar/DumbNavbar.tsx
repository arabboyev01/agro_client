import { CAvatar } from "@coreui/react"
import * as S from "./style.navbar"
import { FC } from "react"

const DumbNavbar: FC<{ lastPathname: string }> = ({ lastPathname }) => (
    <S.StyleNavbar>
        <S.Title>{lastPathname}</S.Title>
        <CAvatar color="primary" textColor="white" size="md">A</CAvatar>
    </S.StyleNavbar>
)
export default DumbNavbar