import React, {useState} from "react";
import {LoginForm} from "@/src/modules/login/components/login_form";
import {NextPage} from "next";
import {Layout} from "antd";
import {postBackendFetcher} from "@/src/common/utils/fetchers";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

interface LoginData {
    email: string,
    password: string
}

const LoginPage: NextPage = (props) => {
    const router = useRouter()

    const onFinish = (values: LoginData) => {
        postBackendFetcher('/login', values).then((result) => {
            return router.push('/asset')
        }).catch(err => console.log(err))
    }

    return <Layout className="px-20 w-screen h-screen">
        <div className="my-auto">
            <LoginForm
                onFinish={onFinish}
            ></LoginForm>
        </div>
    </Layout>
}

export async function getStaticProps({locale}: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
            ])),
        },
    };
}

export default LoginPage;