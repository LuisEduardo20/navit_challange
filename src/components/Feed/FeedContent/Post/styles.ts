import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey.grey};
  padding: 1rem;
  gap: 1rem;

  img {
    width: 60px;
    height: 50px;
    border-radius: 50%;
    background-color: green;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.25rem;

    h4 {
      color: ${({ theme }) => theme.colors.black.dark_black};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
    }

    p {
      color: #c2c2c2;
    }
  }
`;

export const HeaderImg = styled.img``;

export const HeaderTitle = styled.h4``;

export const HeaderSubTitle = styled.p``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 0 1rem;
  gap: 0.25rem;

  h2 {
    background-color: blue;
    color: white;
    width: 130px;
    height: 130px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border-radius: 50%;
  }
`;

export const MatchResultContainer = styled.div`
  flex: 1;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: black;
    margin-bottom: 1rem;

    svg {
      color: red;
    }

    p {
      color: #c2c2c2;
    }
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    color: black;
    margin-top: 1rem;
    margin-right: 16%;

    svg {
      color: green;
    }

    p {
      color: #c2c2c2;
    }
  }
`;

export const MatchResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  strong {
    width: 80%;
    height: 65px;

    background-color: #c1c1c1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.black.dark_black};
    font-size: 1.5rem;
  }

  h2 {
    position: absolute;
    /* border: 1px solid cyan; */
    right: 34%;
    background-color: green;
    border: 1px solid ${({ theme }) => theme.colors.black.dark_black};
  }
`;

export const MatchInfos = styled.div`
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.25rem;

  color: #c2c2c2;

  h5 {
    color: black;
  }
`;

export const Social = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey.grey};
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;

    svg {
      cursor: pointer;
      border: 1px solid black;
      border-radius: 50%;
      padding: 0.75rem;
    }
  }
`;

export const Footer = styled.div`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background-color: #c2c2c2;

  div {
    width: 100%;
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.grey.grey};
    border-radius: 8px;

    input {
      border-radius: 8px 0 0 8px;
      border: none;
      flex: 1;
      padding: 1rem;
      outline: none;
      background: white;
    }

    svg {
      border-radius: 0 8px 8px 0;
      background-color: white;
      padding: 1rem;
      border-left: 1px solid ${({ theme }) => theme.colors.grey.grey};
      cursor: pointer;
    }
  }
`;
