import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  align-items: center;
  gap: 1.074rem;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 3.724rem;
    line-height: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
