import { useCurrentLocale, useScopedI18n } from "@/features/locales"
import { localType } from "@/features/types"

export const Language = (path: localType|any) => {
    const t: any = useScopedI18n(path)
    const currentLanguage = useCurrentLocale()
    return { lang: t, l: currentLanguage }
}