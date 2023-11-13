import React from "react";
import MyIcon from "../MyIcon";
import { NavigationContent, LeftLogo, RightNav, NavItem } from "./style";
import navigationList from "@/src/common/navigationList"

interface NavigationProps {
    isIndex: boolean;
}
class Navigation extends React.Component<NavigationProps>{
    render(): React.ReactNode {
        const { isIndex } = this.props
        return (
            <NavigationContent isIndex={isIndex}>
                <LeftLogo href="https://github.com/soarbamboo">
                    <MyIcon type="github-copy" style={{ marginRight: 8 }} />
                    Github
                </LeftLogo>
                <RightNav>
                    {
                        navigationList.map(item =>
                            <NavItem href={item.link} key={item.icon}>
                                <MyIcon type={item.icon} style={{ marginRight: 8 }} />
                                {item.name}
                            </NavItem>)
                    }
                </RightNav>
            </NavigationContent>
        )
    }
}
export default Navigation;