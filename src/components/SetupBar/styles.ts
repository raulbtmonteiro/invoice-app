import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.setupBarBackground};

  width: 100%;
  height: 72px;
  z-index: 10;

  @media screen and (min-width: 992px) {
    position: fixed;
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

export const Logo = styled.img`
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

export const LanguageButton = styled.button`
  background-color: transparent;
  border: none;
  width: 22px;
  height: 22px;
  cursor: pointer;

  display: flex;
  align-items: center;

  img {
    width: 22px;
    height: 16.5px;
  }
`;

export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  margin: 0 12px;
  cursor: pointer;

  background-color: transparent;
  border: none;

  img {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 992px) {
    margin: 20px 0;
  }
`;

export const UserContainer = styled.div`
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

export const UserImage = styled.img`
  border-radius: 50%;
  width: 32px;

  @media screen and (min-width: 992px) {
    width: 40px;
  }
`;
