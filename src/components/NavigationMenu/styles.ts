import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.div`
  width: 85%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MenuItemContainer = styled.div<{
  color: string;
  isSelected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;

  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};

  svg {
    background-color: ${({ color }) => color};
    padding: 0.25rem 0.75rem;
    border-radius: 30px;
    color: white;
  }
`;
