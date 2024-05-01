import { MainButton } from '@/components/Buttons/MainButton'
import * as S from '../style.consultant'
import { TFunction } from 'i18next'
import { FC } from 'react'
import { clickTelegram } from '@/components/Buttons/Telegram'

interface props { 
    lang: TFunction<"language", undefined>, 
    fullName: string, 
    image: string, 
    dagree: string, 
    phone_number: string, 
    callButton: (number: string) => void, 
    telegram_user: string
}

const Consultants: FC<props> = ({ lang, fullName, image, dagree, callButton, phone_number, telegram_user }) => (
    <S.ConsultantContent data-aos="fade-down">
        <S.Image src={image} alt="user" />
        <S.Name>{fullName}</S.Name>
        <S.Subject>{dagree}</S.Subject>
        <S.Buttons>
            <MainButton width={98} height={32} text={lang('call')} textSize={12} onClick={() => callButton(phone_number)}/>
            <S.MessageButton onClick={() => clickTelegram(telegram_user)}>{lang('message')}</S.MessageButton>
        </S.Buttons>
    </S.ConsultantContent>
)
export default Consultants