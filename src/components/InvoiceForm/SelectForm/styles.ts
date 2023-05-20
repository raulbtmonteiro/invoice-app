import styled from "styled-components";

export const Select = styled.select`
  height: 48px;
  width: 100%;
  max-width: 100%;
  background: #ffffff;
  border: 1px solid #dfe3fa;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px min(20px, 25%);
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0c0e16;
  mix-blend-mode: normal;
  cursor: pointer;
  caret-color: #7c5dfa;

  :focus {
    outline: none;
    border: 1px solid #9277ff;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  option {
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #0c0e16;
  }
`;
