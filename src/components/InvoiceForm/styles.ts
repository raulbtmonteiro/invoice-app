import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Back = styled.div`
  color: #0c0e16;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;
  cursor: pointer;
  margin: 32px 0 24px 24px;

  img {
    margin-right: 24px;
  }

  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  letter-spacing: -0.5px;

  color: #0c0e16;
  margin: 0 0 24px 24px;

  @media screen and (min-width: 481px) {
    margin: 56px 0 48px 56px;
  }
`;

export const SectionTitle = styled.h3`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #7c5dfa;
  margin-bottom: 24px;
`;

export const FormFrom = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "street street"
    "city postCode"
    "country country";
  grid-column-gap: 24px;

  @media screen and (min-width: 481px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "street street street"
      "city postCode country";
  }
`;

export const FormTo = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "name name"
    "email email"
    "address address"
    "city postCode"
    "country country"
    "flex flex"
    "flex flex"
    "description description"
    "itemList itemList";
  grid-column-gap: 24px;

  @media screen and (min-width: 481px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "name name name"
      "email email email"
      "address address address"
      "city postCode country"
      "flex flex flex"
      "description description description"
      "itemList itemList itemList";
  }
`;

export const ScrollZone = styled.div`
  padding: 0 10px 0 24px;
  margin-right: 8px;
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #dfe3fa;
    border-radius: 4px;
  }

  @media screen and (min-width: 481px) {
    padding: 0 40px 0 56px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
