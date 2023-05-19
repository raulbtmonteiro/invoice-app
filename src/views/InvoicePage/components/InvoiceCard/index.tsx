import arrowLeft from "../../../../assets/images/icon-arrow-left.svg";
import { DeleteInvoiceModal } from "../DeleteInvoiceModal";
import { OptionsBarMobile } from "../OptionsBarMobile";
import { formatDate } from "../../../../utils";
import { useRef, useState } from "react";
import { StatusBar } from "../StatusBar";
import { ValuesBox } from "../ValuesBox";
import { Invoice } from "../../../types";
import * as S from "./styles";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IInvoiceCard {
  id: string;
}

export const InvoiceCard = ({ id }: IInvoiceCard) => {
  const { t } = useTranslation();
  const [showEditInvoiceModal, setShowEditInvoiceModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const goBackRef = useRef<HTMLAnchorElement>(null);
  const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
  const invoice = invoices.find((invoice: Invoice) => invoice.id === id);

  if (invoice === undefined) {
    return null;
  }

  const [invoiceStatus, setInvoiceStatus] = useState(invoice.status);

  return (
    <S.DisplayContainer>
      <DeleteInvoiceModal
        id={invoice.id}
        showModal={showModal}
        setShowModal={setShowModal}
        goBackRef={goBackRef}
      />
      <S.DisplayWrapper>
        <Link to="/" ref={goBackRef}>
          <S.Back>
            <img src={arrowLeft} alt="arrow-left" />
            {t("invoicePage.invoiceCard.goBack")}
          </S.Back>
        </Link>

        <StatusBar
          id={invoice.id}
          status={invoiceStatus}
          showModal={showModal}
          setInvoiceStatus={setInvoiceStatus}
          setShowModal={setShowModal}
          showEditInvoiceModal={showEditInvoiceModal}
          setShowEditInvoiceModal={setShowEditInvoiceModal}
        />

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
              <S.InfoTitle>
                {t("invoicePage.invoiceCard.invoiceDate")}
              </S.InfoTitle>
              <S.Info>{formatDate(invoice.createdAt)}</S.Info>
            </S.InvoiceDate>
            <S.PaymentDue>
              <S.InfoTitle>
                {t("invoicePage.invoiceCard.paymentDue")}
              </S.InfoTitle>
              <S.Info>{formatDate(invoice.paymentDue)}</S.Info>
            </S.PaymentDue>
            <S.ClientInfoWrapper>
              <S.InfoTitle>{t("invoicePage.invoiceCard.billTo")}</S.InfoTitle>
              <S.Info>{invoice.clientName}</S.Info>
              <div>
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.country}</p>
              </div>
            </S.ClientInfoWrapper>
            <S.SendTo>
              <S.InfoTitle>{t("invoicePage.invoiceCard.sendTo")}</S.InfoTitle>
              <S.Info>{invoice.clientEmail}</S.Info>
            </S.SendTo>
          </S.ClientInfoContainer>

          <ValuesBox invoice={invoice} />
        </S.InfoContainer>
      </S.DisplayWrapper>

      <OptionsBarMobile
        id={invoice.id}
        status={invoiceStatus}
        showModal={showModal}
        setInvoiceStatus={setInvoiceStatus}
        setShowModal={setShowModal}
        setShowEditInvoiceModal={setShowEditInvoiceModal}
      />
    </S.DisplayContainer>
  );
};
