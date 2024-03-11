import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
`;

export const Content = styled.section`
  width: 90%;
  height: 100%;
  background-color: white;
`;

export const Header = styled.div`
  margin-top: 2rem;
  padding: 0 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  h2 {
    color: #000a;
    font-size: 1.5rem;
    font-weight: 600;
  }

  a {
    color: #c2c2c2;
    cursor: pointer;
  }
`;

export const UserInfoContainer = styled.div`
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;

  div {
    display: grid;
    grid-template-columns: 90px 2fr;

    h4 {
      text-align: right;
      margin-right: 1.25rem;
    }
  }
`;
