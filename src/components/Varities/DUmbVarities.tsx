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
    handleData: () => void
    data: dataType[] | null
    l: string
}


type dataType = {
    name_uz: string
    name_ru: string
    name_en: string
    describtion_uz: string
    describtion_ru: string
    describtion_en: string
    id: number
    image: string
}

const DumbVarities: FC<Props> = ({ lang, handleRoute, categories, types, setType, setCategory, category, type, handleData, data, l }) => (
    <S.StyleHomePage>
        <S.LeftContent>
            {HomeData(lang).map(({ id, name, Icon, route }) =>
                <S.LeftItems key={id} onClick={() => handleRoute(route)} data-aos="fade-right">
                    <Icon />
                    <S.LeftItemsText>{name}</S.LeftItemsText>
                    <MainButton width={121} height={30} text={lang('access')} textSize={9} />
                </S.LeftItems>
            )}
        </S.LeftContent>
        <SS.VarityComponent>
            <SS.VaritySelectors>
                <VarityDropdown data={categories} setValue={setCategory} value={category?.[`name_${l}`]} text={lang('select_type')} l={l} />
                <VarityDropdown data={types} setValue={setType} value={type?.[`name_${l}`]} text={lang('select_plant')} l={l} />
                <div>
                    <MainButton onClick={handleData} width={200} height={50} text={lang('search')} />
                </div>
            </SS.VaritySelectors>
            <SS.VarietyContent>
                <SS.MainText>{lang('varity_title')}</SS.MainText>
            </SS.VarietyContent>
            <SS.VaritiesWrapper>
                {data && data.map((item: dataType) => {
                    console.log(item)
                    const name: string = item[`name_${l}` as keyof dataType] as string
                    const description: string = item[`describtion_${l}` as keyof dataType] as string
                    return <SS.VarityType key={item.id}>
                        <SS.VarityImage src={item.image} alt={`image_${item.id}`} />
                        <div>
                            <SS.VarityName>{name}</SS.VarityName>
                            <SS.VarityText>{description}</SS.VarityText>

                        </div>
                    </SS.VarityType>
                }
                )}
            </SS.VaritiesWrapper>
        </SS.VarityComponent>
    </S.StyleHomePage>
)
export default DumbVarities