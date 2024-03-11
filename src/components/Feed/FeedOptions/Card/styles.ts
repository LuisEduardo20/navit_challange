import styled from "styled-components";

export const CardContainer = styled.a<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  cursor: pointer;

  min-width: 90px;
  height: 150px;

  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  color: #333;

  background-color: #fafafa;

  svg {
    width: 20px;
    height: 20px;

    background-color: ${({ color }) => color};
    padding: 0.75rem;
    border-radius: 50%;
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #c2c2c2;
`;
