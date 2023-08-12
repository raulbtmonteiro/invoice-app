import { SetupBar } from "../../../src/components";
import { InvoicesDisplay, Loading } from "./components";

import i18next from "i18next";

export const Home = () => {
  return (
    <>
      <SetupBar i18next={i18next} />
      <Loading>
        <InvoicesDisplay />
      </Loading>
    </>
  );
};
