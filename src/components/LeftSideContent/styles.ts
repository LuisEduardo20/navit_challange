import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  width: 90%;
  height: 100%;
  background-color: white;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;

  div {
    width: 85%;
    height: 42px;
    border: 1px solid #d1d0cb;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 80%;
      height: 100%;

      border: none;
      border-right: 1px solid #d1d0cb;
      background: transparent;
      outline: none;

      padding: 0 10px;

      flex: 1;

      font-size: 1rem;
    }

    svg {
      padding: 10px;
      cursor: pointer;

      transition: 0.2s;

      &:hover {
        background-color: #d1d0cbf1;
      }
    }
  }
`;
