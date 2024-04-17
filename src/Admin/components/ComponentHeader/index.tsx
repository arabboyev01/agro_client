import { CButton } from "@coreui/react"
import * as S from "../Users/style.products"
import { FC } from "react"

const ComponentHeader: FC<{ title: string, onClick?: () => void }> = ({ title, onClick }) => {
    return (
        <S.HeaderSection>
            <CButton onClick={onClick} color="primary">{title}</CButton>
        </S.HeaderSection>
    )
}
export default ComponentHeader