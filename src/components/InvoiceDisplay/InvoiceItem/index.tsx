import arrowRight from "../../../assets/icon-arrow-right.svg";
import { formatCurrency, formatDate } from "../../../utils";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import * as S from "./styles";

interface InvoiceItem {
  invoice: Invoice;
}

export const InvoiceItem = ({ invoice }: InvoiceItem) => {
  const theme: Template = useContext(ThemeContext);

  const selectStatusColor = (status: string) => {
    let result = { color: "", backgroundColor: "" };
    switch (status) {
      case "paid":
        result = {
          color: "#33D69F",
          backgroundColor: "rgba(51, 214, 159, 0.06)",
        };
        break;
      case "pending":
        result = {
          color: "#FF8F00",
          backgroundColor: "rgba(255, 143, 0, 0.06)",
        };
        break;
      case "draft":
        if (theme.title == "light") {
          result = {
            color: "#373B53",
            backgroundColor: "rgba(55, 59, 83,0.06)",
          };
        } else {
          result = {
            color: "#DFE3FA",
            backgroundColor: "rgba(223, 227, 250,0.06)",
          };
        }
        break;
      default:
        return null;
    }
    return result;
  };

  return (
    <S.Container>
      <S.Id>
        <S.Highlight>#</S.Highlight>
        {invoice.id}
      </S.Id>
      <S.InvoiceDate>Due {formatDate(invoice.paymentDue)}</S.InvoiceDate>
      <S.Name>{invoice.clientName}</S.Name>
      <S.Value>{formatCurrency(invoice.total)}</S.Value>
      <S.Status theme={selectStatusColor(invoice.status)}>
        <div></div>
        {invoice.status}
      </S.Status>
      <S.Seta src={arrowRight} />
    </S.Container>
  );
};
