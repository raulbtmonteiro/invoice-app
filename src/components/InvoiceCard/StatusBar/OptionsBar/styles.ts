import styled from 'styled-components';

export const OptionsBarContainer = styled.div`
  display: none;

  @media screen and (min-width: 481px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 309px;
    height: 91px;
  }
`;