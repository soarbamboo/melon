// import { Button } from "components/Button";
import React from "react";
import { Footer, MainCounter } from "./styled";
import Navigation from "../Navigation"
interface LayoutProps {
    path: string;
    query: Record<string, string>;
    isCommonPage: boolean;
    isIndex: boolean;
    children: any;
}

export default class Layout extends React.Component<LayoutProps> {
    static defaultProps = {
        isIndex: false,
        isCommonPage: false
    };
    render() {
        const { children, isCommonPage, isIndex } = this.props;
        if (isCommonPage) {
            return <React.Fragment>{children}</React.Fragment>;
        }
        console.log(this.props)
        return (
            <div style={{ width: "100%" }}>
                <Navigation isIndex={isIndex} />
                <MainCounter isIndex={isIndex}>
                    {children}
                </MainCounter>
                <Footer>
                    <a href="http://www.beian.miit.gov.cn" target="_blank" rel="nofollow">陕ICP备19024533号-3</a>
                </Footer>
            </div >
        );
    }
}
