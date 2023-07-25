import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: fixed;
  bottom: 0;
  left: 0;

  > div {
    width: fit-content;
    gap: 0.647rem;

    svg {
      width: 2.2rem;
      height: 1.8rem;

      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }

    h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.526rem;
      line-height: auto;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  p {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media screen and (min-width: 1000px) {
    justify-content: space-between;

    padding: 0 12.3rem;

    > div {
      gap: 1rem;

      svg {
        width: 3rem;
        height: 3rem;
      }

      h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: normal;
      }
    }

    p {
        font-family:"Roboto", sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
  }
`;
