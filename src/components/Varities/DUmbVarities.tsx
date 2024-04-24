import { FC } from "react"
import { MainButton } from "../Buttons/MainButton"
import { HomeData } from "../../components/Home/statics"
import { TFunction } from "i18next"
import * as S from "../../components/Home/style.home"
import * as SS from './style.varity'
import VarityDropdown from "./VarityDropdown"

interface Props { 
    lang: TFunction<"translation", undefined>, 
    handleRoute: (route: string) => void, 
    categories: any, 
    types: any, 
    setType: (type: string) => void 
    setCategory: (category: string) => void
    type: any
    category: any
}

const DumbVarities: FC<Props> = ({ lang, handleRoute, categories, types, setType, setCategory, category, type }) => (
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
                <VarityDropdown data={categories} setValue={setCategory} value={category?.name} text={lang('select_type')}/>
                <VarityDropdown data={types} setValue={setType} value={type?.name} text={lang('select_plant')}/>
                <div>
                    <MainButton width={200} height={50} text={lang('home.search')} />
                </div>
            </SS.VaritySelectors>
        </SS.VarityComponent>
    </S.StyleHomePage>
)
export default DumbVarities