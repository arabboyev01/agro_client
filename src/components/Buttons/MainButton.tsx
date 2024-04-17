import { FC } from "react"
import { StyledButton } from "./style.button"
import ButtonImage from "../../assets/button-line.svg"
import { CSpinner } from "@coreui/react"
interface ButtonProps { width: number, height: number, text: string, textSize?: number, onClick?: any, loader?: boolean }

export const MainButton: FC<ButtonProps> = ({ width, height, text, textSize, onClick, loader }) => (
    <StyledButton width={width} height={height} textSize={textSize} backgroundImage={ButtonImage.src} onClick={onClick}>
        {text}
        {loader && <CSpinner color="light" style={{ width: '15px', height: "15px", marginLeft: '12px' }} />}
    </StyledButton>
)