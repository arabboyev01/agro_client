import { MainButton } from '@/components/Buttons/MainButton'
import * as S from '../style.consultant'
import userImage from '@/assets/Image.png'
import { TFunction } from 'i18next'
import { FC } from 'react'

interface props { lang: TFunction<"language", undefined>, fullName: string, image: string, dagree: string, phone_number: string, callButton: (number: string) => void}

const Consultants: FC<props> = ({ lang, fullName, image, dagree, callButton, phone_number }) => (
    <S.ConsultantContent data-aos="fade-down">
        <S.Image src={image} alt="user" />
        <S.Name>{fullName}</S.Name>
        <S.Subject>{dagree}</S.Subject>
        <S.Text>это может содержать информацию о сихе или его квалификации</S.Text>
        <S.Buttons>
            <MainButton width={98} height={32} text={lang('call')} textSize={12} onClick={() => callButton(phone_number)}/>
            <S.MessageButton>{lang('message')}</S.MessageButton>
        </S.Buttons>
    </S.ConsultantContent>
)
export default Consultants