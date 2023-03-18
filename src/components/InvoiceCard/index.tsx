import arrowLeft from "../../assets/icon-arrow-left.svg";
import invoicesData from "../InvoiceDisplay/data.json";
import { OptionsBarMobile } from "./OptionsBarMobile";
import { formatDate } from "../../utils";
import { StatusBar } from "./StatusBar";
import { ValuesBox } from "./ValuesBox";
import { Link } from "react-router-dom";
import * as S from './styles';

interface IInvoiceCard {
  id: string;
}

export const InvoiceCard = ({id}: IInvoiceCard) => {
  const invoice = invoicesData.find((invoice) => invoice.id === id);

  if(invoice === undefined){
    return null
  } 

  return (
    <S.DisplayContainer>
      <S.DisplayWrapper>
        <Link to="/">
          <S.Back>
            <img src={arrowLeft} alt="arrow-left" />
            Go Back
          </S.Back>
        </Link>

        <StatusBar invoice={invoice}/>

        <S.InfoContainer>
          <S.SenderAddressContainer>
            <S.IDContainer>
              <S.Id>
                <S.Highlight>#</S.Highlight>
                {invoice.id}
              </S.Id>
              <S.InvoiceDescription>{invoice.description}</S.InvoiceDescription>
            </S.IDContainer>
            <S.SenderAddressWrapper>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </S.SenderAddressWrapper>
          </S.SenderAddressContainer>

          <S.ClientInfoContainer>
            <S.InvoiceDate>
              <S.InfoTitle>Invoice Date</S.InfoTitle>
              <S.Info>{formatDate(invoice.createdAt)}</S.Info>
            </S.InvoiceDate>
            <S.PaymentDue>
              <S.InfoTitle>Payment Due</S.InfoTitle>
              <S.Info>{formatDate(invoice.paymentDue)}</S.Info>
            </S.PaymentDue>
            <S.ClientInfoWrapper>
              <S.InfoTitle>Bill To</S.InfoTitle>
              <S.Info>{invoice.clientName}</S.Info>
              <div>
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </div>
            </S.ClientInfoWrapper>
            <S.SendTo>
              <S.InfoTitle>Send To</S.InfoTitle>
              <S.Info>{invoice.clientEmail}</S.Info>
            </S.SendTo>
          </S.ClientInfoContainer>

          <ValuesBox invoice={invoice}/>
        </S.InfoContainer>
      </S.DisplayWrapper>

      <OptionsBarMobile />
    </S.DisplayContainer>
  );
};
