import { formatCurrency, formatDate, selectStatusColor } from "../../../utils";
import arrowRight from "../../../assets/icon-arrow-right.svg";
import { Template } from "../../../themes/types";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as S from "./styles";

interface IInvoiceItem {
  invoice: Invoice;
}

export const InvoiceItem = ({ invoice }: IInvoiceItem) => {
  const theme: Template = useContext(ThemeContext);

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
