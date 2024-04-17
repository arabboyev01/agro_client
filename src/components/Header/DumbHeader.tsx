import * as S from './style.header'
import LogoSVG from "../../assets/AGROSEEDS копия 1.svg"
import MainDropdown from '../Dropdown/MainDropdown'
import { LanData } from './data'
import { FC } from 'react'
import { MainButton } from '../Buttons/MainButton'
import { TFunction } from 'i18next'

interface Props { lan: string, setLang: (value: string) => void, lang: TFunction<"translation", undefined>, handleRoute: (route: string) => void }

const DumbHeader: FC<Props> = ({ lan, setLang, lang, handleRoute }) => (
  <S.StyleHeader data-aos="fade-down">
    <S.HeaderContent>
      <S.LogoImage src={LogoSVG.src} alt='logo' onClick={() => handleRoute('/')}/>
      <S.Content>
        <MainDropdown title='ru' data={LanData} value={lan} setValue={setLang} />
        <MainButton width={200} height={50} text={lang('login')} onClick={() => handleRoute('/admin/login')} />
      </S.Content>
    </S.HeaderContent>
  </S.StyleHeader>
)
export default DumbHeader
