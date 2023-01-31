import '@/src/styles/globals.css'
import type {AppProps} from 'next/app'
import {Avatar, ConfigProvider, Layout, List, Menu, theme} from "antd";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import mainTheme from "@/src/common/utils/theme";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {appWithTranslation} from "next-i18next";

config.autoAddCss = false

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
function App({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page: any) => page)
    return (
            <ConfigProvider
                theme={mainTheme}>
                {getLayout(<Component {...pageProps} />)}
            </ConfigProvider>
    )
}

export default appWithTranslation( App )