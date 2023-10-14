import App from "next/app";
import Head from "next/head";
import React from "react";
require("@/src/assets/css/global.css");
if (!__SERVER__) {
    require("@/src/assets/iconfont/iconfont");
}
export interface AppProps {
    env: string; //运行环境
    path: string; // 页面path
    query: Record<string, string>; // query信息
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
    static async getStaticProps({ Component, ctx }) {
        // 初始化传给页面的props
        let pageProps: {};

        // 先判断当前页面是否已经定义过getInitialProps(V9.3+版本改名为getStaticProps静态props/getServerSideProps服务端props)
        if (Component.getStaticProps) {
            pageProps = await Component.getStaticProps(ctx);
        }
        return {
            pageProps: {
                ...pageProps,
                baseInfo: ctx?.req?.baseInfo,
                hostname: ctx?.req?.hostname,
                pathname: ctx?.pathname,
            },
        };
    }
    // 对页面重新渲染
    render() {
        const { Component, pageProps } = this.props;
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
                <Component {...pageProps} />
            </React.Fragment>
        );
    }
}
