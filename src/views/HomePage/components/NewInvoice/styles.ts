import styled from "styled-components";

export const Container = styled.div<{ isModalOpen: boolean }>`
  display: flex;
  height: calc(100dvh - 72px);
  background-color: white;
  width: 100%;
  position: absolute;
  top: ${({ isModalOpen }) => (isModalOpen ? "0px" : "-100vh")};
  z-index: 8;
  transition: top 0.5s ease-in-out;
  //overflow-y: scroll;
  //overscroll-behavior: contain;

  @media screen and (min-width: 481px) {
    position: fixed;
    top: unset;
    left: ${({ isModalOpen }) => (isModalOpen ? "0px" : "-719px")};
    border-radius: 0px 20px 20px 0px;
    width: 616px;
    max-width: 100%;
    transition: left 0.5s ease-in-out;
  }

  @media screen and (min-width: 992px) {
    width: 719px;
    padding-left: 103px;
    height: 100vh;
  }
`;

export const Overlay = styled.div<{ isModalOpen: boolean }>`
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(12, 14, 22, 0.75);
`;
