import React, {Component, ComponentProps, PropsWithChildren} from "react";
import MainMenu from "@/src/common/components/menu/menu";
import {Content} from "antd/lib/layout/layout";
import {Layout} from "antd";
import {AppProps} from "next/app";

export const MainLayout = (props: PropsWithChildren) => {
    return <>
        <Layout>
            <MainMenu/>
            <Content className="mx-20">
                {props.children}
            </Content>
        </Layout>
    </>
}