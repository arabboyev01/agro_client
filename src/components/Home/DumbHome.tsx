import { FC } from "react"
import { MainButton } from "../Buttons/MainButton"
import Carousel from "../Carousel"
import { HomeData, carouselData } from "./statics"
import { PhoneSVG, EmailSVG } from "@/assets/images"
import { TFunction } from "i18next"
import * as S from "./style.home"

interface Props { lang: TFunction<"translation", undefined>, handleRoute: (route: string) => void, callButton: () => void }

const DumbHomePage: FC<Props> = ({ lang, handleRoute, callButton }) => (
    <S.StyleHomePage>
        <S.LeftContent>
            {HomeData(lang).map(({ id, name, Icon, route }) =>
                <S.LeftItems key={id} onClick={() => handleRoute(route)} data-aos="fade-right">
                    <Icon />
                    <S.LeftItemsText>{name}</S.LeftItemsText>
                    <MainButton width={121} height={30} text={lang('home.access')} textSize={9} />
                </S.LeftItems>
            )}
        </S.LeftContent>
        <S.MiddleContent>
            <S.MiddleTile>
                <S.GreenTitle data-aos="fade-right">{lang('home.title')}</S.GreenTitle>
                <S.BlackTitle data-aos="fade-left">{lang('home.seeds')}</S.BlackTitle>
            </S.MiddleTile>
            <S.Subtitle>{lang('home.text')}</S.Subtitle>
            <S.Paragraph>{lang('home.sub')}</S.Paragraph>
            <MainButton width={185} height={45} text={lang('call')} textSize={12} onClick={callButton}/>

            <S.MiddleContact>
                <S.ContactInfo>
                    <PhoneSVG />
                    <S.ContactText onClick={callButton}>{lang('call')}</S.ContactText>
                </S.ContactInfo>
                <S.ContactInfo>
                    <EmailSVG />
                    <S.ContactText>{lang('message')}</S.ContactText>
                </S.ContactInfo>
            </S.MiddleContact>
        </S.MiddleContent>
        <S.EndContent data-aos="zoom-in-left">
            <Carousel data={carouselData} />
        </S.EndContent>
    </S.StyleHomePage>
)
export default DumbHomePage