import styled from "styled-components";

export const SetupBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.setupBarBackground};

  width: 100%;
  height: 72px;

  @media screen and (min-width: 992px) {
    position: absolute;
    width: 103px;
    top: 0;
    bottom: 0;
    height: unset;

    flex-direction: column;
    border-radius: 0px 20px 20px 0px;
  }
`;

export const FlexLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  background-color: ${({ theme }) => theme.colors.logoBackground};
  border-radius: 0px 20px 20px 0px;
  overflow: hidden;

  ::after {
    content: "";
    position: relative;
    width: 72px;
    height: 72px;
    top: 36px;
    z-index: 0;
    background-color: ${({ theme }) => theme.colors.logoShadow};
    border-radius: 0px 20px 20px 0px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    height: 103px;

    ::after {
      width: 103px;
      height: 103px;
      top: 51px;
    }
  }
`;

export const SetupBarIcon = styled.img`
  position: absolute;
  z-index: 2;

  @media screen and (min-width: 992px) {
    scale: 1.33;
  }
`;

export const FlexRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    height: unset;
  }
`;

export const SetupBarTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  margin-right: 12px;
  cursor: pointer;

  @media screen and (min-width: 992px) {
    margin: 0 0 20px;
  }
`;

export const SetupBarUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;

  border-left: 1px solid #494e6e;

  @media screen and (min-width: 992px) {
    border-top: 1px solid #494e6e;
    border-left: none;
    height: 103px;
    width: 100%;
  }
`;

export const SetupBarUserImage = styled.img`
  border-radius: 50%;
  width: 32px;

  @media screen and (min-width: 992px) {
    width: 40px;
  }
`;
