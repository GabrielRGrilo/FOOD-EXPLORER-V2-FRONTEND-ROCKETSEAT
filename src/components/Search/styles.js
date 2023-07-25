import styled from 'styled-components';

export const Container = styled.label`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border: none;
  border-radius: 5px;
  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;
  

  input {
    width: 100%;
    background: none;
    border: none;
    outline: none;

    font-family:"Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
