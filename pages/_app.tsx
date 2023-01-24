import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Avatar, ConfigProvider, Layout, List, Menu, theme} from "antd";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import MainMenu from "@/pages/components/menu/menu";
import mainTheme from "@/pages/utils/theme";
import {Content} from "antd/lib/layout/layout";

config.autoAddCss = false

export default function App({Component, pageProps}: AppProps) {
    return (
        <ConfigProvider
            theme={mainTheme}>
            <Layout>
                    <MainMenu/>
                <Content>
                    <Component {...pageProps} />
                </Content>
            </Layout>
        </ConfigProvider>
    )
}
