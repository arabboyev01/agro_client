import { ArrowIcon } from "@/assets/images"
import { title } from "process"
import { FC, useState } from "react"
import * as S from "./style.varity";

type Props<T> = {
    data: T
    setValue: (value: any) => void
    value: string
    text: string
}


const VarityDropdown: FC<Props<any>> = ({ data, setValue , value, text}) => {

    const [open, setOpen] = useState(false)

    const handleSelectValue = (value: string) => {
        setOpen(false)
        setValue(value)
    }
    
    return (
        <S.StyleDropDown>
            <S.DrowDownHeader onClick={() => setOpen(!open)}>
                <ArrowIcon active={open} />
                <S.Title>{value ? value : text}</S.Title>
            </S.DrowDownHeader>
            <S.DropDownItems active={open}>
                {data?.map((item: any) =>
                    <S.Items key={item} onClick={() => handleSelectValue(item)}>{item.name}</S.Items>
                )}
            </S.DropDownItems>
        </S.StyleDropDown>
    )
}
export default VarityDropdown