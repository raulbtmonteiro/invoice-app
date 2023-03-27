import { useParams } from "react-router-dom";
import { SetupBar } from "../../components";
import { InvoiceCard } from "./components";

export const InvoicePage = () => {
  const params = useParams();

  if (params.id === undefined) {
    return null;
  }

  return (
    <>
      <SetupBar />
      <InvoiceCard id={params.id} />
    </>
  );
};
