import styled, { keyframes } from "styled-components";

export const TypewriterContent = styled.div`
    font-family: sans-serif;
    text-align: center;
`
const cursorAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const Cursor = styled.p`
    display: inline-block;
    position: relative;
    /* color: white; */
    font-size: 36px;
    font-weight: 400;
    &::after{
        content: "";
        margin: auto;
        position: absolute;
        right: -4px;
        top: -3px;
        width: 1px;
        height: 100%;
        background-color: #666;
        animation: ${cursorAnimation} 1.5s step-end infinite;
    }
`
