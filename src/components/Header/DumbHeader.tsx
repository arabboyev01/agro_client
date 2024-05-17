import * as S from './style.header'
import LogoSVG from "../../assets/space_agro.png"
import MainDropdown from '../Dropdown/MainDropdown'
import { LanData } from './data'
import { FC } from 'react'
import { MainButton } from '../Buttons/MainButton'
import { TFunction } from 'i18next'
import { NextRouter } from 'next/router'

interface Props {
  lan: string
  setLang: (value: string) => void
  lang: TFunction<"translation", undefined>
  handleRoute: () => void
  isMobile: boolean
  router: NextRouter
  loader: boolean
}

const DumbHeader: FC<Props> = ({ lan, setLang, lang, handleRoute, isMobile, router, loader }) => (
  <S.StyleHeader data-aos="fade-down">
    <S.HeaderContent>
      <S.LogoImage src={LogoSVG.src} alt='logo' onClick={() => router.push('/')} />
      <S.Content>
        <MainDropdown title='uz' data={LanData} value={lan} setValue={setLang} />
        <MainButton width={isMobile ? 100 : 200} height={isMobile ? 35 : 50} text={lang('login')} onClick={handleRoute} loader={loader}/>
      </S.Content>
    </S.HeaderContent>
  </S.StyleHeader>
)
export default DumbHeader
