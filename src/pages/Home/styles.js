import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  main {
    margin-bottom: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media screen and (min-width: 1000px) {
    main {
      margin-bottom: 4.8rem;

      gap: 4.8rem;
    }
  }
`;

export const Content = styled.div`
  width: 40.6rem;
  height: 14.9rem;
  margin: 1.5rem auto 6.2rem;

  position: relative;

  > img {
    width: 19.1rem;
    height: 14.9rem;

    z-index: 1;
  }

  > div {
    width: 37.6rem;
    height: 12rem;
    background-image: ${({ theme }) => theme.COLORS.GRADIENT_200};
    border: none;
    border-radius: 2.92px;
    padding: 3.6rem 0.8rem 2.2rem 15.3rem;

    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;

    h1 {
      margin-bottom: 0.3rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 1.4;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-top: 3rem;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 119rem;
    height: 41.2rem;
    margin: 2.6rem auto 4.8rem;

    img {
      width: 65.6rem;
      height: 41.2rem;
    }

    > div {
      width: 112rem;
      height: 26rem;
      background-image: ${({ theme }) => theme.COLORS.GRADIENT_200};
      border: none;
      border-radius: 8px;
      padding: 8.8rem 10rem 9.2rem 59.8rem;

      h1 {
        margin-bottom: 0.8rem;

        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 4rem;
        line-height: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      p {
        font-family:"Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  }
`;
