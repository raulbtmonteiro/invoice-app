import * as S from "./styles";
import arrowRight from "../../../assets/icon-arrow-right.svg";
import { formatCurrency, formatDate } from "../../../utils";

interface InvoiceItem {
  invoice: Invoice;
}

export const InvoiceItem = ({ invoice }: InvoiceItem) => {
  return (
    <S.Container>
      <S.Id>
        <S.Highlight>#</S.Highlight>
        {invoice.id}
      </S.Id>
      <S.InvoiceDate>Due {formatDate(invoice.createdAt)}</S.InvoiceDate>
      <S.Name>{invoice.clientName}</S.Name>
      <S.Value>{formatCurrency(invoice.total)}</S.Value>
      <S.Status>{invoice.status}</S.Status>
      <S.Seta src={arrowRight} />
    </S.Container>
  );
};
