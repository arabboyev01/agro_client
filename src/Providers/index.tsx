import type { AppProps, AppType } from "next/app"
import { I18nProvider } from "@/features/locales"

export const withProvider = (Component: AppType) => {
    const withProvider = (props: AppProps) => (
        <I18nProvider locale={props.pageProps.locale}>
            <Component {...props} />
        </I18nProvider>
    )

    withProvider.displayName = `withProvider(${Component?.displayName || Component?.name || "Component"})`

    return withProvider
}