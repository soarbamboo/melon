import Document, { DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentProps {
    url: string;
    headMeta?: any
}
export default class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(
        ctx
    ): Promise<DocumentInitialProps & DocumentProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            if (ctx.req) {
                ctx.req.renderStartTime = Date.now();
                ctx.req.renderPageName = ctx.pathname;
            }
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => {
                        return sheet.collectStyles(<App  {...props} key={props.route} />)
                    }
                });
            const { hostname, headmeta, protocol, url } = ctx?.req || {};
            const initialProps = await Document.getInitialProps(ctx);
            const curl = headmeta?.url
                ? `${protocol || "https"}://${hostname}${url}`
                : "";
            return {
                ...initialProps,
                styles: ([
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ]),
                url: curl,
                headMeta: headmeta
            };
        } finally {
            sheet.seal();
        }
    }


    render() {
        const { headMeta } = this.props;
        const { description, keywords } = headMeta || {};
        return (
            <Html>
                <Head>
                    <meta name="full-screen" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <link rel="icon" href="/yahu.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" href="/yahu.ico" type="image/x-icon" />
                    {!!description && <meta property="description" content={description} />}
                    {!!keywords && <meta property="keyswords" content={keywords} />}
                </Head>
                <body>
                    <Main />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(){
								if (/(iPhone\sOS)\s([\d_]+)/.test(navigator.userAgent)) {
									document.documentElement.style.fontSize = ((document.documentElement.clientWidth / 375) * 16) + "px";
								} else {
									document.documentElement.style.fontSize = ((window.innerWidth / 375) * 16) + "px";
								}
							})();`,
                        }}
                    />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
