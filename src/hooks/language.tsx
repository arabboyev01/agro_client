import { TFunction, useTranslation } from "next-i18next"

export const Language = () => {
    const { t }: { t: TFunction } = useTranslation()
    return { lang: t}
}