import { MainButton } from "../Buttons/MainButton"
import * as S from "./style.carousel"
import { FC } from "react"

const DumbCarousel: FC<{ image: string, inCrement: () => void, descrement: () => void }> = ({ image, inCrement, descrement }) => (
    <S.StyleCarousel>
        <S.HeaderStyle  bg={image}></S.HeaderStyle>
        <S.Footer>
            <MainButton width={45} height={45} text="<" onClick={descrement}/>
            <MainButton width={45} height={45} text=">" onClick={inCrement}/>
        </S.Footer>
    </S.StyleCarousel>
)
export default DumbCarousel