import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
    font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
    font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
    line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
    color: ${({ theme }) => theme.colors.light_400};
  }

  input {
    height: 4.8rem;
    background-color: ${({ theme }) => theme.colors.dark_900};
    border: none;
    border-radius: 8px;
    padding: 1.2rem 1.4rem;

    font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
    font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
    font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
    line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
    color: ${({ theme }) => theme.colors.light_300};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }

  input[type='number'] {
    appearance: number;
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;