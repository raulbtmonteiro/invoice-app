import arrowRight from "../../../../assets/images/icon-arrow-right.svg";
import { ThemeContext } from "styled-components";
import { Theme } from "../../../../themes/types";
import { Invoice } from "../../../types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as S from "./styles";
import {
  formatCurrency,
  formatDate,
  selectStatusColor,
} from "../../../../utils";

interface IInvoiceItem {
  invoice: Invoice;
}

export const InvoiceItem = ({ invoice }: IInvoiceItem) => {
  const theme: Theme = useContext(ThemeContext);

  return (
    <>
      <div></div>
      <S.Container>
        <Link to={`/invoice/${invoice.id}`}>
          <S.Id>
            <S.Highlight>#</S.Highlight>
            {invoice.id}
          </S.Id>
        </Link>
        <S.InvoiceDate>Due {formatDate(invoice.paymentDue)}</S.InvoiceDate>
        <S.Name>{invoice.clientName}</S.Name>
        <S.Value>{formatCurrency(invoice.total)}</S.Value>
        <S.Status theme={selectStatusColor(theme, invoice.status)}>
          <div></div>
          {invoice.status}
        </S.Status>
        <Link to={`/invoice/${invoice.id}`}>
          <S.Seta src={arrowRight} />
        </Link>
      </S.Container>
    </>
  );
};
