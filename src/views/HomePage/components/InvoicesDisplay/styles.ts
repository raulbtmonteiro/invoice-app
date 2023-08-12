import styled, { css } from "styled-components";

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

export const DisplayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 32px 24px;
  max-width: 730px;
  margin: 0 auto;

  @media screen and (min-width: 481px) {
    padding: 56px 24px;
  }

  @media screen and (min-width: 778px) {
    padding: 56px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 70px 0;
  }
`;

export const FlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DisplayInfoTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;

  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.title == "light" &&
    css`
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `}

  @media screen and (min-width: 481px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -1px;
  }
`;

export const DisplayInfoAmount = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.textDescription};
`;

export const FlexRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
`;

export const NewInvoiceButton = styled.button`
  width: 90px;
  height: 44px;
  border-radius: 24px;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.logoBackground};
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.textButtom};

  @media screen and (min-width: 481px) {
    height: 48px;
    width: 150px;
    gap: 16px;
  }
`;

export const HiddenText = styled.span`
  display: none;

  @media screen and (min-width: 481px) {
    display: inline-block;
  }
`;

export const PlusImage = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 6px;
  border-radius: 50%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InvoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px 32px;
  max-width: 730px;
  margin: 0 auto;

  @media screen and (min-width: 481px) {
    padding: 0 24px 50px;
  }

  @media screen and (min-width: 778px) {
    padding: 0 0 50px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 0 32px;
  }
`;

export const EmptyDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  height: 100%;

  img {
    margin-top: 60px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 481px) {
    img {
      margin-bottom: 40px;
    }
  }
`;

export const EmptyTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;
  color: ${({ theme }) => theme.colors.title};
`;

export const EmptyDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.textDescription};

  text-align: center;
  letter-spacing: -0.25px;
  max-width: 200px;
`;
