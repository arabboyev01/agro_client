import { createI18n } from "next-international"

export const {
    useI18n,
    useScopedI18n,
    I18nProvider,
    getLocaleProps,
    useChangeLocale,
    useCurrentLocale,
} = createI18n({
    en: () => import("../../../public/assets/locales/en.json"),
    ru: () => import("../../../public/assets/locales/ru.json"),
    uz: () => import("../../../public/assets/locales/uz.json"),
})