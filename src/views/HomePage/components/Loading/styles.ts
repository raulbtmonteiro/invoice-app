import styled, { keyframes } from "styled-components";

const inAndOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  z-index: -1;
  top: 72px;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  min-height: calc(100vh - 72px);
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60px;
    animation: ${inAndOut} 0.5s infinite alternate;
  }

  @media screen and (min-width: 992px) {
    top: 0;
    min-height: 100vh;
    padding-left: 103px;
  }
`;
