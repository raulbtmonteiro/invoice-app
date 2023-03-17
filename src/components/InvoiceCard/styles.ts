import styled from "styled-components";

export const DisplayContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 72px;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  min-height: calc(100vh - 72px);
  background-color: ${({ theme }) => theme.colors.body};

  @media screen and (min-width: 992px) {
    top: 0;
    min-height: 100vh;
    padding-left: 103px;
  }
`;