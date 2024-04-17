import { MainButton } from '@/components/Buttons/MainButton'
import * as S from '../style.consultant'
import userImage from '@/assets/Image.png'
import { TFunction } from 'i18next'
import { FC } from 'react'

interface props { lang: TFunction<"language", undefined>}

const Consultants: FC<props> = ({ lang }) => (
    <S.ConsultantContent data-aos="fade-down">
        <S.Image src={userImage.src} alt="user" />
        <S.Name>Абдулла Одилжанов</S.Name>
        <S.Subject>Ученая степень</S.Subject>
        <S.Text>это может содержать информацию о сихе или его квалификации</S.Text>
        <S.Buttons>
            <MainButton width={98} height={32} text={lang('call')} textSize={12}/>
            <S.MessageButton>{lang('message')}</S.MessageButton>
        </S.Buttons>
    </S.ConsultantContent>
)
export default Consultants