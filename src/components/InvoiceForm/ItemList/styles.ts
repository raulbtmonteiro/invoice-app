import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "itemName itemName itemName itemName itemName itemName"
    "itemQty itemPrice itemPrice itemTotal itemTotal itemDelete";
  grid-column-gap: 16px;

  @media screen and (min-width: 481px) {
    grid-template-columns: 4fr 1fr 2fr 2fr 1fr;
    grid-template-areas: "itemName itemQty itemPrice itemTotal itemDelete";
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-bottom: 24px;
  height: 48px;
  cursor: pointer;
  background: #252945;
  border-radius: 24px;
  border: none;

  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.25px;

  color: #dfe3fa;
`;
