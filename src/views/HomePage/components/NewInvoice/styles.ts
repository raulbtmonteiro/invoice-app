import styled from "styled-components";

export const Container = styled.div<{ isModalOpen: boolean }>`
  display: flex;
  height: 100vh;
  background-color: white;
  width: 719px;
  //adicnar margin de 103px
  position: fixed;
  left: ${({ isModalOpen }) => (isModalOpen ? "0px" : "-719px")};
  border-radius: 0px 20px 20px 0px;
  z-index: 8;
  transition: left 0.5s ease-in-out;
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
