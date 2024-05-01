import { BagSVG, SearchIcon } from "@/assets/images"
import * as S from "./style.seeds"
import { ChangeEvent, FC, Fragment } from "react"
import ModalComponent from "../Modal"
import { ProductType } from "@/types"
import { TFunction } from "i18next"

interface Props {
    hover: number | null,
    setIsHovered: (active: number | null) => void,
    open: boolean,
    setOpen: (value: boolean) => void,
    data: ProductType[]
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
    lang: TFunction<"translation", undefined> 
    l: any
}

const DumbSeeds: FC<Props> = ({ hover, setIsHovered, open, setOpen, data, handleSearch, lang, l }) => (
    <S.StyleSeeds>
        <S.SeachInput>
            <S.Input placeholder={lang('seeds.search')} onChange={handleSearch} />
            <SearchIcon />
        </S.SeachInput>
        <S.SeedsContent>
            {data?.map((items) => {
                const name: string = items[`name_${l}` as keyof ProductType] as string;
                return <Fragment key={items.name} data-aos="fade-down">
                    <S.SingleSeed
                        onMouseEnter={() => setIsHovered(items.id)}
                        onMouseLeave={() => setIsHovered(null)}
                    >
                        <S.SeedImage src={items.image} />
                        <S.SeedContent>
                            <S.TextContent>
                            <S.Name>{name}</S.Name>
                                <S.Price>${items.price}</S.Price>
                            </S.TextContent>
                            <S.IconsWrapper onClick={() => setOpen(true)}>
                                <BagSVG active={hover === items.id} />
                            </S.IconsWrapper>
                        </S.SeedContent>
                        <ModalComponent open={open} setOpen={setOpen} data={items} />
                    </S.SingleSeed>
                </Fragment>
            }
            )}
        </S.SeedsContent>
    </S.StyleSeeds>
)
export default DumbSeeds