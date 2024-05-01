import { TFunction, useTranslation } from "next-i18next"

export const Language = () => {
    const { t , i18n }: { t: TFunction , i18n: any} = useTranslation()
    const lang: string = i18n.language;
    return { lang: t, l: lang}
}