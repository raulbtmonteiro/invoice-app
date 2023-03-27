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
    width: fit-content;
  }

  @media screen and (min-width: 481px) {
    padding: 0 24px 50px;
    margin: 56px auto 0;
  }

  @media screen and (min-width: 778px) {
    padding: 0 0 50px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 0 32px;
    margin: 70px auto 0;
  }
`;

export const Back = styled.div`
  color: ${({ theme }) => theme.colors.text};

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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.bodyCards};
  padding: 24px;
  border-radius: 8px;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.colors.textDescription};
`;

export const SenderAddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const IDContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Id = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-area: id;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  @media screen and (min-width: 481px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
  }
`;

export const Highlight = styled.div`
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const InvoiceDescription = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colors.textDescription};
`;

export const SenderAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;

  p {
    font-weight: 500;
    font-size: 11px;
    line-height: 18px;
    letter-spacing: -0.229167px;
    color: ${({ theme }) => theme.colors.textDescription};
  }
`;

export const ClientInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "date client"
    "payment client"
    "email email";
  width: 100%;
  
  @media screen and (min-width: 481px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "date client email"
      "payment client email";
  }
`;

export const InvoiceDate = styled.div`
  grid-area: date;
`;

export const InfoTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const PaymentDue = styled.div`
  grid-area: payment;
`;

export const ClientInfoWrapper = styled.div`
  grid-area: client;

  div {
    p {
  
      font-weight: 500;
      font-size: 11px;
      line-height: 18px;
      letter-spacing: -0.229167px;
    }
  }
`;

export const SendTo = styled.div`
  grid-area: email;
`;