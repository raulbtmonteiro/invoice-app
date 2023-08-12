import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.article`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "id owner"
    "date status"
    "value status";
  padding: 24px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bodyCards};
  border-radius: 8px;
  cursor: default;

  @media screen and (min-width: 481px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 778px) {
    padding: 24px 0;
    justify-content: space-around;
  }
`;

export const Id = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-area: id;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  @media screen and (min-width: 481px) {
    margin: 0;
  }
`;

export const Highlight = styled.div`
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const InvoiceDate = styled.div`
  grid-area: date;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.colors.textDescription};
`;

export const Name = styled.h3`
  grid-area: owner;
  display: flex;
  justify-content: flex-end;
  min-width: 86px;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  text-align: right;
  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.colors.textDescription};

  @media screen and (min-width: 481px) {
    justify-content: flex-start;
  }
`;

export const Value = styled.p`
  display: flex;
  grid-area: value;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  min-width: 87px;

  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 481px) {
    justify-content: flex-end;
  }
`;

export const Status = styled.div`
  grid-area: status;
  margin: 4px 0 4px min(calc(50vw - 152px), 213px);
  width: 104px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.backgroundColor};
  mix-blend-mode: normal;
  border-radius: 6px;
  color: ${({ theme }) => theme.color};
  text-transform: capitalize;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color};
  }

  @media screen and (min-width: 481px) {
    margin: 0;
  }
`;

export const Seta = styled.img`
  display: none;
  cursor: pointer;

  @media screen and (min-width: 481px) {
    display: inline;
  }
`;
