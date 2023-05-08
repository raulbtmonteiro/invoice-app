import styled from "styled-components";

export const GridLocator = styled.div<{ gridArea: string }>`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 481px) {
    flex-direction: ${({ gridArea }) => gridArea === "flex" && "row"};
    gap: ${({ gridArea }) => gridArea === "flex" && "24px"};
  }
`;
