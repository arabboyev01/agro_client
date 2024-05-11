import { CAvatar } from "@coreui/react"
import * as S from "./style.navbar"
import { FC } from "react"
import MainDropdown from "@/components/Dropdown/MainDropdown"
import { LanData } from "@/components/Header/data"

const DumbNavbar: FC<{ lastPathname: string, lang: string, setLang: (value: string) => void }> = ({ lastPathname, lang, setLang }) => (
    <S.StyleNavbar>
        <S.Title>{lastPathname}</S.Title>
        <S.Lan>
            <MainDropdown title='ru' data={LanData} value={lang} setValue={setLang} />
            <CAvatar color="primary" textColor="white" size="md">A</CAvatar>
        </S.Lan>
    </S.StyleNavbar>
)
export default DumbNavbar