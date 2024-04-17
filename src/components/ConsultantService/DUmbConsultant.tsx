import { TFunction } from 'i18next'
import Consultants from './Consultants'
import * as S from './style.consultant'
import { FC } from 'react'

interface props { lang: TFunction<"language", undefined>}

const DumbConsultant: FC<props> = ({ lang }) => (
        <S.StyleConsultant>
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
            <Consultants lang={lang} />
        </S.StyleConsultant>
)
export default DumbConsultant