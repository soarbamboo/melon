import styled from 'styled-components';

export const NavContent = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 20px;
  justify-content: space-between;
  display: flex;
  font-weight: bold;
  color: #2b2928;
  font-size: 16px;
  box-sizing: border-box;
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
