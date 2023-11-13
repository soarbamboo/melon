import React from "react";
import { NavContent, NavTypeItem, NavTypeItemTitle, NavTypeItemBox, NavItem } from "./style";
import { navList } from "./common"


export default class Nav extends React.Component {
    render() {
        return (
            <NavContent>
                {/* 类型分类 */}
                {
                    navList.map(navTypeitem => (
                        <NavTypeItem key={navTypeitem.name}>
                            <NavTypeItemTitle>{navTypeitem.name}</NavTypeItemTitle>
                            <NavTypeItemBox>
                                {
                                    navTypeitem.children.map(navItem => (
                                        <NavItem key={navItem.link}>
                                            {navItem.name}
                                        </NavItem>
                                    ))

                                }
                            </NavTypeItemBox>
                        </NavTypeItem>
                    ))
                }

            </NavContent>
        )
    }
}