import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: white;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  svg {
    color: blue;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  resize: vertical;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 100px;
  resize: none;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.85rem 2rem;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: #fff;
  cursor: pointer;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  padding: 0.85rem 2rem;

  border-radius: 5px;

  cursor: pointer;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;
