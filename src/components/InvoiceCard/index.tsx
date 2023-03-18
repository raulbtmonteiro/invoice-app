import { formatCurrency, selectStatusColor } from "../../utils";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import invoicesData from "../InvoiceDisplay/data.json";
import { ThemeContext } from "styled-components";
import { Template } from "../../themes/types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as S from './styles';

interface IInvoiceCard {
  id: string | undefined;
}

export const InvoiceCard = ({id}: IInvoiceCard) => {
  const theme: Template = useContext(ThemeContext);
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

        <S.StatusContainer>
          Status
          <S.Status theme={selectStatusColor(theme, invoice?.status)}>
            <div></div>
            {invoice?.status}
          </S.Status>
        </S.StatusContainer>

        <S.InfoContainer>
          <S.ValuesContainer>
            <S.ValuesDescriptionContainer>
              {invoice?.items.map((item) => {
                return (  
                  <S.ValueDescription>
                    <div>
                      <S.DescriptionName>{item.name}</S.DescriptionName>
                      <S.DescriptionPrice>{item.quantity} x {formatCurrency(item.price)}</S.DescriptionPrice>
                    </div>
                    <S.TotalPrice>{formatCurrency(item.total)}</S.TotalPrice>
                  </S.ValueDescription>
                );
              })}
            </S.ValuesDescriptionContainer>
            <S.TotalContainer>
              <S.TotalText>Grand Total</S.TotalText>
              <S.Total>{formatCurrency(invoice?.total)}</S.Total>
            </S.TotalContainer>
          </S.ValuesContainer>
        </S.InfoContainer>
      </S.DisplayWrapper>
    </S.DisplayContainer>
  );
};
