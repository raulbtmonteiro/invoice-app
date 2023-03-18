import styled from 'styled-components';

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ValuesDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  gap: 24px;
  background-color: ${({ theme }) => theme.colors.valuesDescriptionContainer};
  border-radius: 8px 8px 0 0;
`;

export const Table = styled.div`
  display: none;

  @media screen and (min-width: 481px) {
    display: flex;
    justify-content: space-between;
    div{
      width: 70px;
      display: flex;
      justify-content: flex-end;
    }
    div:first-child{
      width: 120px;
      justify-content: flex-start;
    }
    div:nth-child(2){
      width: 30px;
      justify-content: center;
    }
  }
`;

export const ValueDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionName = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 8px;
  width: 120px;
`;

export const DescriptionPriceMobile = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.textHighlight};

  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export const DescriptionQuantity = styled.div`
  display: none;

  @media screen and (min-width: 481px) {
    display: flex;
    justify-content: center;

    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    width: 30px;
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

export const DescriptionPrice = styled.div`
  display: none;

  @media screen and (min-width: 481px) {
    display: flex;
    justify-content: flex-end;

    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    width: 70px;
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`;

export const TotalPrice = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 481px) {
    display: flex;
    justify-content: flex-end;
    width: 70px;
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
  color: ${({ theme }) => theme.colors.textButtom};
`;

export const TotalText = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
`;

export const Total = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.416667px;
`;