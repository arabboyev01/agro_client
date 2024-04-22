import { TFunction } from 'i18next'
import Consultants from './Consultants'
import * as S from './style.consultant'
import { FC } from 'react'
import { ConsultationType } from '@/Admin/components/Consultation/data'

interface props { lang: TFunction<"language", undefined>, data: ConsultationType[], callButton: (number: string) => void}

const DumbConsultant: FC<props> = ({ lang, data, callButton }) => (
        <S.StyleConsultant>
            {data?.map((item: ConsultationType) =>
                <Consultants lang={lang} key={item.id} {...item} callButton={callButton}/>
            )}
        </S.StyleConsultant>
)
export default DumbConsultant