import arrowLeft from "../../assets/icon-arrow-left.svg";
import invoicesData from "../InvoiceDisplay/data.json";
import { ThemeContext } from "styled-components";
import { selectStatusColor } from "../../utils";
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
          <S.Status theme={invoice && selectStatusColor(theme, invoice?.status)}>
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
                      <div>{item.name}</div>
                      <div>{item.quantity} x {item.price}</div>
                    </div>
                    <div>{item.total}</div>
                  </S.ValueDescription>
                );
              })}
            </S.ValuesDescriptionContainer>
            <S.TotalContainer>
              <S.TotalText>Grand Total</S.TotalText>
              <S.Total>{invoice?.total}</S.Total>
            </S.TotalContainer>
          </S.ValuesContainer>
        </S.InfoContainer>
      </S.DisplayWrapper>
    </S.DisplayContainer>
  );
};
