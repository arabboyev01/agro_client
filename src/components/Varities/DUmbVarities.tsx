import { FC } from "react"
import { MainButton } from "../Buttons/MainButton"
import { HomeData } from "../../components/Home/statics"
import { TFunction } from "i18next"
import * as S from "../../components/Home/style.home"
import * as SS from './style.varity'

interface Props { lang: TFunction<"translation", undefined>, handleRoute: (route: string) => void }

const DumbVarities: FC<Props> = ({ lang, handleRoute }) => (
    <S.StyleHomePage>
        <S.LeftContent>
            {HomeData(lang).map(({ id, name, Icon, route }) =>
                <S.LeftItems key={id} onClick={() => handleRoute(route)} data-aos="fade-right">
                    <Icon />
                    <S.LeftItemsText>{name}</S.LeftItemsText>
                    <MainButton width={121} height={30} text={lang('home.access')} textSize={9} />
                </S.LeftItems>
            )}
        </S.LeftContent>
        <SS.VarityComponent>
            <SS.VaritySelectors>
                
            </SS.VaritySelectors>
        </SS.VarityComponent>
    </S.StyleHomePage>
)
export default DumbVarities