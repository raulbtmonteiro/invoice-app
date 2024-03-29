import styled from "styled-components";

export const Label = styled.label<{ isVisible: boolean }>`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #7e88c3;
  margin-bottom: 10px;

  @media screen and (min-width: 481px) {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }
`;
