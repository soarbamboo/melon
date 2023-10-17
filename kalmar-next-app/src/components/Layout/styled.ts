import styled, { css } from 'styled-components';

export const MainCounter = styled.main`
  width: 100%;
  margin-top: 0px;
  height: 100vh;
  position: relative;
  ${(props: { dataIsIndex: boolean }) =>
    !props.dataIsIndex &&
    css`
      padding-top: 82px;
      box-sizing: border-box;
    `}
`;

export const Footer = styled.footer`
  position: fixed;
  right: 10px;
  bottom: 20px;
  z-index: 1;
  & > a {
    text-decoration: none;
    color: #444a50;
    font-weight: 600;
    font-size: 12px;
    font-family: circular, 'segoe ui', sans-serif;
  }
`;
