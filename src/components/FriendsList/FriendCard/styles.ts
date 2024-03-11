import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem 0;
  cursor: pointer;

  box-shadow: 6px 2px 26px -9px rgba(181, 181, 181, 1);
  border-radius: 6px;

  background-color: #ebf5ff;

  transition: 0.3s;

  max-width: 66.5px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  background-color: transparent;
  font-size: 1.5rem;
  padding: 1.25rem 1rem;
`;

export const ContentContainer = styled.div`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;

  background-color: white;
`;

export const Name = styled.h4`
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${({ theme }) => theme.colors.black.dark_black}
`;

export const Nick = styled.p`
  color: ${({ theme }) => theme.colors.grey.grey};
  max-width: 40px;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
