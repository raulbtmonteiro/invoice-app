import emailCard from "../../../../assets/images/email_campaign_Flatline.svg";
import plus from "../../../../assets/images/icon-plus.svg";
import invoicesData from "../../../../data.json";
import { NewInvoiceModal } from "../NewInvoice";
import { InvoiceItem } from "../InvoiceItem";
import { Invoice } from "../../../types";
import { Filter } from "../Filter";
import { useState } from "react";
import * as S from "./styles";

export const InvoicesDisplay = () => {
  const [newInvoice, setNewInvoice] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string[]>([]);

  const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");

  const filteredData = invoices.filter((invoice: Invoice) => {
    if (activeFilter.length === 0) {
      return true;
    } else {
      return activeFilter.includes(invoice.status);
    }
  });

  return (
    <S.DisplayContainer>
      <NewInvoiceModal newInvoice={newInvoice} setNewInvoice={setNewInvoice} />
      <S.DisplayInfo>
        <S.FlexLeft>
          <S.DisplayInfoTitle>Invoices</S.DisplayInfoTitle>
          <S.DisplayInfoAmount>
            {filteredData.length}{" "}
            {filteredData.length > 1 ? "invoices" : "invoice"}
          </S.DisplayInfoAmount>
        </S.FlexLeft>

        <S.FlexRight>
          <Filter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <S.NewInvoiceButtom onClick={() => setNewInvoice(true)}>
            <S.PlusImage>
              <img src={plus} />
            </S.PlusImage>
            <p>
              New <S.HiddenText>Invoices</S.HiddenText>
            </p>
          </S.NewInvoiceButtom>
        </S.FlexRight>
      </S.DisplayInfo>

      <S.InvoicesContainer>
        {invoicesData.length > 0 ? (
          filteredData.map((invoice: Invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))
        ) : (
          <S.EmptyDisplay>
            <img src={emailCard} />
            <S.EmptyTitle>There is nothing here</S.EmptyTitle>
            <S.EmptyDescription>
              Create an invoice by clicking the
              <b> New Invoice</b> button and get started
            </S.EmptyDescription>
          </S.EmptyDisplay>
        )}
      </S.InvoicesContainer>
    </S.DisplayContainer>
  );
};
