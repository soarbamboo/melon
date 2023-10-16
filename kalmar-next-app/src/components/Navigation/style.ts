import styled, { css } from 'styled-components';
import MyIcon from '../MyIcon';
export const NavigationContent = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: transparent;
  padding: 20px;
  justify-content: space-between;
  display: flex;
  font-weight: bold;
  color: #2b2928;
  font-size: 16px;
  box-sizing: border-box;

  ${(props: { dataIsIndex: boolean }) =>
    !props.dataIsIndex &&
    css`
      border-bottom: 1px solid #eaeaea;
    `}
`;

export const LeftLogo = styled.a`
  text-decoration: none;
  padding: 10px;
  color: #2b2928;
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: right;
  font-weight: 400;
`;

export const NavItem = styled(LeftLogo)`
  margin-right: 10px;
`;
