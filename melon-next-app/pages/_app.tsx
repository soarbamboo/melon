import Layout from "@/src/components/Layout";
import { PageStatic } from "@/src/utils/types";
import App from "next/app";
import Head from "next/head";
import React from "react";
require("@/src/assets/css/global.css");
if (!__SERVER__) {
    require("@/src/assets/iconfont/iconfont");
}
export interface AppProps {
    env: string; //运行环境
    pageProps: any
}

export default class MyApp extends App<AppProps> {
    /**
     *
     * @param param0
     * 在next.js中，数据的获取能够经过getInitialPorps()完成，这个方法可让咱们在进入某个页面以前获取到这个页面所须要的数据
     * 也可让咱们在App组件中获取全局的数据，还能够经过它实现客户端和服务端数据的同步，它是next.js数据获取的规范.
     * 在next.js中，不推荐使用componentDidMount()等方式获取数据，而应该使用getInitialPorps()
     *
     * getInitialProps()返回了一个对象，其属性能够做为props传递到组件中进行使用
     */
    static getInitialProps = async ({ ctx }) => {
        return {
            pageProps: {
                hostname: ctx?.req?.hostname,
                pathname: ctx?.pathname,
                query: ctx?.query,
            } as any,
        };
    };
    // 对页面重新渲染
    render() {
        const { Component, pageProps } = this.props;
        const { COMMON_PAGE, IS_INDEX } = (Component as unknown) as PageStatic;
        return (
            <React.Fragment>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
                    />
                    <title>next.js project</title>
                </Head>
                <Layout path={pageProps.pathname} query={pageProps.query} isCommonPage={COMMON_PAGE} isIndex={IS_INDEX}>
                    <Component {...pageProps} />
                </Layout>
            </React.Fragment>
        );
    }
}
