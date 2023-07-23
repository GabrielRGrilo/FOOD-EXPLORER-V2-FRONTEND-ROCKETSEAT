import styled from 'styled-components';

export const IngredientsSC = styled.div`
  width: 100%;
  height: 3.2rem;
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.colors.light_600};
  border: ${({ theme, isNew }) =>
    isNew ? `dashed 1px ${theme.colors.light_500}` : 'none'};
  border-radius: 8px;
  padding: 1rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    background: none;
    border: none;

    font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
    font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
    font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
    line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
    color: ${({ theme }) => theme.colors.light_100};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }

  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;
