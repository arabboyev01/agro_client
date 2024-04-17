import { FC, useState } from "react"
import * as S from "./style.dropdown"
import { ArrowIcon } from "@/assets/images"
import i18next from 'i18next'

interface Props { title: string, data: any, value: string, setValue: (value: string) => void }

export const MainDropdown: FC<Props> = ({ title, data, value, setValue }) => {

    const [open, setOpen] = useState(false)

    const handleSelectValue = (value: string) => {
        setValue(value)
        setOpen(false)
        return i18next.changeLanguage(value)
    }

    return (
        <S.StyleDropDown>
            <S.DrowDownHeader onClick={() => setOpen(!open)}>
                <S.Title>{!value ? title : value}</S.Title>
                <ArrowIcon active={open} />
            </S.DrowDownHeader>
            <S.DropDownItems active={open}>
                {data.map((item: string) =>
                    <S.Items key={item} onClick={() => handleSelectValue(item)}>{item}</S.Items>
                )}
            </S.DropDownItems>
        </S.StyleDropDown>
    )
}
export default MainDropdown