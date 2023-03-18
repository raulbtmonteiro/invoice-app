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

export const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px 32px;
  max-width: 730px;
  margin: 32px auto 0;

  a{
    text-decoration: none;
  }

  @media screen and (min-width: 481px) {
    //padding: 0 24px 50px;
  }

  @media screen and (min-width: 778px) {
    //padding: 0 0 50px;
  }

  @media screen and (min-width: 992px) {
    //padding: 0 0 32px;
  }
`;

export const Back = styled.div`
  color: ${({ theme }) => theme.colors.text};

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;
  cursor: pointer;
  margin-bottom: 16px;

  img{
    margin-right: 24px;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  background-color: ${({ theme }) => theme.colors.bodyCards};
  padding: 24px;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.colors.textDescription};

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;

export const Status = styled.div`
  margin: 4px 0 4px min(calc(50vw - 152px), 213px);
  width: 104px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.backgroundColor};
  mix-blend-mode: normal;
  border-radius: 6px;
  color: ${({ theme }) => theme.color};
  text-transform: capitalize;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color};
  }

  @media screen and (min-width: 481px) {
    //margin: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bodyCards};
  padding: 24px;
  border-radius: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.colors.textDescription};

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;

export const ValuesDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.valuesDescriptionContainer};
  border-radius: 8px 8px 0 0;

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;

export const ValueDescription = styled.div`

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.grandTotalBG};
  border-radius: 0 0 8px 8px;

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;

export const TotalText = styled.div`

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;

export const Total = styled.div`

  @media screen and (min-width: 481px) {
    //justify-content: flex-start;
  }
`;