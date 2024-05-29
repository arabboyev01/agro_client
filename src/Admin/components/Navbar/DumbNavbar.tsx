import { CAvatar, CButton, CPopover } from "@coreui/react"
import * as S from "./style.navbar"
import { FC } from "react"
import MainDropdown from "@/components/Dropdown/MainDropdown"
import { LanData } from "@/components/Header/data"
import { handleRouter } from "./dumb"

const DumbNavbar: FC<{ lastPathname: string, lang: string, setLang: (value: string) => void, navigate: any }> = ({ lastPathname, lang, setLang, navigate }) => (
    <S.StyleNavbar>
        <S.Title>{lastPathname}</S.Title>
        <S.Lan>
            <MainDropdown title='uz' data={LanData} value={lang} setValue={setLang} />
            <CPopover
                content={
                    <CButton color="danger" onClick={() => handleRouter(navigate)}>Logout</CButton>
                }
                placement="bottom"
            >
                <CAvatar color="primary" textColor="white" size="md">A</CAvatar>
            </CPopover>
        </S.Lan>
    </S.StyleNavbar>
)
export default DumbNavbar