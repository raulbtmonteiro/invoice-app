import arrowRight from "../../../../assets/images/icon-arrow-right.svg";
import { ThemeContext } from "styled-components";
import { Theme } from "../../../../themes/types";
import { Invoice } from "../../../types";
import { useContext } from "react";
import * as S from "./styles";
import {
  formatCurrency,
  formatDate,
  selectStatusColor,
} from "../../../../utils";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IInvoiceItem {
  invoice: Invoice;
}

export const InvoiceItem = ({ invoice }: IInvoiceItem) => {
  const { t } = useTranslation();
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
        <S.InvoiceDate>
          {t("invoiceItem.info")} {formatDate(invoice.paymentDue)}
        </S.InvoiceDate>
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
