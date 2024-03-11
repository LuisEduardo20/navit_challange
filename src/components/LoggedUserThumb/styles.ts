import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  display: flex;
  align-self: center;
  justify-content: center;

  section {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    img {
      max-width: 60px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      h4 {
        color: ${({ theme }) => theme.colors.black.dark_black};
      }

      p {
        color: ${({ theme }) => theme.colors.grey.grey};
      }
    }
  }
`;
