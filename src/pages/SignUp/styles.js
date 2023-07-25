import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  main {
    width: 100%;
    max-width: 31.6rem;
    margin: 15.8rem auto;
    > form {

      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      legend {
        display: none;
      }

      a {
        margin: 0 auto;

        font-family: "Poppins", sans-serif;
        font-weight: 100;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  .loading {
    position: absolute;
    top: 30%;
    right: 21%;

    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media screen and (min-width: 1000px) {
    main {
      width: 100%;
      max-width: 110.6rem;
      margin: 9rem auto;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      form {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border: none;
        border-radius: 16px;
        margin: 0;
        padding: 6.4rem;

        legend {
          width: 34.8rem;

          display: block;
          font-family: "Poppins", sans-serif;
            font-weight: 100;
            font-size: 2.4rem;
            line-height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            text-align: center;
        }
      }
    }

    .loading {
      top: 40%;
      right: 45%;
    }
  }
`;
