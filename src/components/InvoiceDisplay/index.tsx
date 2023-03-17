import plus from "../../assets/icon-plus.svg";
import invoicesData from "./data.json";
import emailCard from "../../assets/email_campaign_Flatline.svg";
import { Filter } from "./Filter";
import { InvoiceItem } from "./InvoiceItem";
import {
  DisplayContainer,
  DisplayInfo,
  DisplayInfoAmount,
  DisplayInfoTitle,
  EmptyDescription,
  EmptyDisplay,
  EmptyTitle,
  FlexLeft,
  FlexRight,
  HiddenText,
  InvoicesContainer,
  NewInvoiceButtom,
  PlusImage,
} from "./styles";
import { useState } from "react";

export const InvoicesDisplay = () => {
  const [activeFilter, setActiveFilter] = useState<string[]>([]);

  const filteredData = invoicesData.filter((invoice:Invoice) => {
    if(activeFilter.length === 0){
      return true
    } else {
      return activeFilter.includes(invoice.status)
    }
  })

  return (
    <DisplayContainer>
      <DisplayInfo>
        <FlexLeft>
          <DisplayInfoTitle>Invoices</DisplayInfoTitle>
          <DisplayInfoAmount>{filteredData.length} {filteredData.length > 1 ? 'invoices' : 'invoice'}</DisplayInfoAmount>
        </FlexLeft>

        <FlexRight>
          <Filter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />

          <NewInvoiceButtom>
            <PlusImage>
              <img src={plus} />
            </PlusImage>
            <p>
              New <HiddenText>Invoices</HiddenText>
            </p>
          </NewInvoiceButtom>
        </FlexRight>
      </DisplayInfo>

      <InvoicesContainer>
        {invoicesData.length > 0 ? (
          filteredData.map((invoice: Invoice) => (
            <InvoiceItem 
              key={invoice.id}
              invoice={invoice}
            />
          ))
        ) : (
          <EmptyDisplay>
            <img src={emailCard} />
            <EmptyTitle>There is nothing here</EmptyTitle>
            <EmptyDescription>
              Create an invoice by clicking the
              <b> New Invoice</b> button and get started
            </EmptyDescription>
          </EmptyDisplay>
        )}
      </InvoicesContainer>
    </DisplayContainer>
  );
};
