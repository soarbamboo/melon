import React from "react";
import Icon from "../Icon";
import { NavContent, LeftLogo, RightNav, NavItem } from "./style";
import navList from "@/src/common/navList"
class Nav extends React.Component {
    render(): React.ReactNode {
        return (
            <NavContent>
                <LeftLogo href="https://github.com/soarbamboo">
                    <Icon type="github-copy" style={{ marginRight: 8 }} />
                    Github
                </LeftLogo>
                <RightNav>
                    {
                        navList.map(item =>
                            <NavItem href={item.link} key={item.icon}>
                                <Icon type={item.icon} style={{ marginRight: 8 }} />
                                {item.name}
                            </NavItem>)
                    }
                </RightNav>
            </NavContent>
        )
    }
}
export default Nav;