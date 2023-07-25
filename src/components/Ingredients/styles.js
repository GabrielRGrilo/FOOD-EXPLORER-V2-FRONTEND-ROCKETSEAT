import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3.2rem;
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) =>
    isNew ? `dashed 1px ${theme.COLORS.LIGHT_500}` : 'none'};
  border-radius: 8px;
  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    background: none;
    border: none;

    font-family: 'Roboto', sans-serif;;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;
