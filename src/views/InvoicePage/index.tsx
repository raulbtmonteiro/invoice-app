import { useParams } from "react-router-dom";
import { SetupBar } from "../../components";
import { InvoiceCard } from "./components";

import i18next from "i18next";

export const InvoicePage = () => {
  const params = useParams();

  if (params.id === undefined) {
    return null;
  }

  return (
    <>
      <SetupBar i18next={i18next} />
      <InvoiceCard id={params.id} />
    </>
  );
};
