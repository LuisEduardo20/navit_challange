import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;

  h3 {
    padding-left: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.5px solid #c2c2c2af;
  }
`;

export const DataContainer = styled.section<{ color: "green" | "red" }>`
  margin: 2rem 0;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ color }) => color};
  font-size: 1.15rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  h4 {
  }
`;
