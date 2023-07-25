import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  main {
    width: 36.4rem;
    margin: 1rem auto 5.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    a {
      width: fit-content;

      display: flex;
      align-items: center;
      gap: 0.758rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.655rem;
      line-height: 1.4%;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      label:first-child,
      p {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      select {
        background-image: url('/src/assets/ArrowDown.svg');
        background-repeat: no-repeat;
        background-position: center right 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border: none;
        border-radius: 5px;
        padding: 1.6rem;
        outline: none;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      textarea {
        width: 100%;
        height: 17.2rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
        border-radius: 8px;
        padding: 1.4rem;
        outline: none;

        resize: none;

        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }
    }

    .image {
      label {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border: none;
        border-radius: 8px;
        padding: 1.2rem 3.2rem;

        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 0.8rem;

        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        line-height:2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      input[type='file'] {
        display: none;
      }
    }

    .ingredients {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border: none;
      border-radius: 8px;
      padding: 0.8rem;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }

    > button {
      background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }

  @media screen and (min-width: 1000px) {
    main {
      width: 112rem;
      margin: 4rem auto 11.6rem;

      a {
        gap: 1.1rem;

        font-family: "Poppins", sans-serif;
        font-weight:700;
        font-size: 2.4rem;
        line-height:1.4rem;

        svg {
          width: 1.2rem;
          height: 2.2rem;
        }
      }

      h1 {
        margin-bottom: 0.8rem;
      }

      .row {
        flex-direction: row;
        gap: 3.2rem;
        align-items: end;

        > div {
          gap: 1.6rem;
        }
        
        > div:nth-child(2) {
          width: 50%;
        }
      }

      .image label {
        width: 22.9rem;
      }

      .dish-category {
        width: 36.4rem;

        select {
          height: 4.8rem;
        }
      }

      .ingredients {
        width: 83.7rem;

        grid-template-columns: repeat(5, 1fr);

        > div {
          width: fit-content;
        }
      }

      > button {
        width: fit-content;
        background-color: ${({ theme }) => theme.COLORS_TOMATO_400};
        padding: 1.2rem 2.4rem;

        align-self: end;
        
      }
    }
  }
`;
