import { SetupBar } from "../../../src/components";
import { InvoicesDisplay, Loading } from "./components";

export const Home = () => {
  return (
    <>
      <SetupBar />
      <Loading>
        <InvoicesDisplay />
      </Loading>
    </>
  );
};
