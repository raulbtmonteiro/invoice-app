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

export const ImgWrapper = styled.div<{ isFirst: boolean }>`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg:hover {
    path {
      fill: ${({ theme }) => theme.colors.error};
    }
  }

  @media screen and (min-width: 481px) {
    margin-bottom: ${({ isFirst }) => (isFirst ? "0" : "24px")};
  }
`;

export const Title = styled.h3`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  letter-spacing: -0.375px;

  color: #777f98;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 100%;
  margin-bottom: 24px;
  height: 48px;
  cursor: pointer;
  background: #f9fafe;
  border-radius: 24px;
  border: none;

  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.25px;

  color: #7e88c3;
`;

export const Total = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  height: 48px;
  margin-bottom: 24px;

  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;
  color: #0c0e16;
`;
