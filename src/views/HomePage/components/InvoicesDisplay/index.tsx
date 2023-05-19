import emailCard from "../../../../assets/images/email_campaign_Flatline.svg";
import plus from "../../../../assets/images/icon-plus.svg";
import { NewInvoiceModal } from "../NewInvoice";
import { InvoiceItem } from "../InvoiceItem";
import { Invoice } from "../../../types";
import { Filter } from "../Filter";
import { useState } from "react";
import * as S from "./styles";

import { useTranslation, Trans } from "react-i18next";

export const InvoicesDisplay = () => {
  const { t } = useTranslation();
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string[]>([]);

  const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");

  const filteredData = invoices.filter((invoice: Invoice) => {
    if (activeFilter.length === 0) {
      return true;
    } else {
      return activeFilter.includes(invoice.status);
    }
  });

  const handleNewInvoiceClick = () => {
    document.body.style.overflow = "hidden";
    setShowNewInvoiceModal(true);
  };

  return (
    <S.DisplayContainer>
      <NewInvoiceModal
        showNewInvoiceModal={showNewInvoiceModal}
        setShowNewInvoiceModal={setShowNewInvoiceModal}
      />
      <S.DisplayInfo>
        <S.FlexLeft>
          <S.DisplayInfoTitle>
            {t("home.invoicesDisplay.title")}
          </S.DisplayInfoTitle>
          <S.DisplayInfoAmount>
            {filteredData.length}{" "}
            {filteredData.length > 1
              ? t("home.invoicesDisplay.multipleAmount")
              : t("home.invoicesDisplay.singleAmount")}
          </S.DisplayInfoAmount>
        </S.FlexLeft>

        <S.FlexRight>
          <Filter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <S.NewInvoiceButtom onClick={() => handleNewInvoiceClick()}>
            <S.PlusImage>
              <img src={plus} />
            </S.PlusImage>
            <p>
              {t("home.invoicesDisplay.button")}{" "}
              <S.HiddenText>
                {t("home.invoicesDisplay.buttonHidenText")}
              </S.HiddenText>
            </p>
          </S.NewInvoiceButtom>
        </S.FlexRight>
      </S.DisplayInfo>

      <S.InvoicesContainer>
        {invoices.length > 0 ? (
          filteredData.map((invoice: Invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))
        ) : (
          <S.EmptyDisplay>
            <img src={emailCard} />
            <S.EmptyTitle>
              {t("home.invoicesDisplay.emptyCardTitle")}
            </S.EmptyTitle>
            <S.EmptyDescription>
              <Trans
                t={t}
                i18nKey="home.invoicesDisplay.emptyCardDescription"
              />
            </S.EmptyDescription>
          </S.EmptyDisplay>
        )}
      </S.InvoicesContainer>
    </S.DisplayContainer>
  );
};
