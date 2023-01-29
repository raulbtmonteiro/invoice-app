import styled from "styled-components";

export const DisplayContainer = styled.div`
  height: calc(100vh - 72px);
  background-color: ${({ theme }) => theme.colors.body};

  @media screen and (min-width: 992px) {
    height: 100vh;
    padding-left: 103px;
  }
`;

export const DisplayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 32px 24px;
`;

export const FlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DisplayInfoTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;

  color: ${({ theme }) => theme.colors.text};
`;

export const DisplayInfoAmount = styled.p`
  font-style: normal;
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

export const DisplayInfoFilter = styled.select``;

export const DisplayInfoNew = styled.button`
  width: 90px;
  height: 44px;
  border-radius: 24px;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.logoBackground};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.colors.textButtom};
`;

export const DisplayInfoNewButtom = styled.div`
  width: 32px;
  height: 32px;
  margin-left: 6px;
  border-radius: 50%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;
