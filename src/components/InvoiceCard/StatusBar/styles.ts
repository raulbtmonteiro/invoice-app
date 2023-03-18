import styled from 'styled-components';

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  background-color: ${({ theme }) => theme.colors.bodyCards};
  padding: 24px;
  border-radius: 8px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  width: 100%;

  color: ${({ theme }) => theme.colors.textDescription};

  @media screen and (min-width: 481px) {
    justify-content: flex-start;
    width: fit-content;
  }
`;

export const Status = styled.div`
  margin-left: 16px;
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