import { useRef, useState } from "react";
import * as S from "./styles";
import { LuMessagesSquare } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";

const CreatePost = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [postText, setPostText] = useState("");
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     setSelectedImage(event.target.files[0]);
  //   }
  // };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <S.PostContainer>
      <S.Title>
        <LuMessagesSquare /> Criar uma publicação
      </S.Title>

      <S.InputContainer>
        <S.TextArea
          value={postText}
          onChange={handleTextChange}
          placeholder="Fale algo sobre seu treino, sobre sua última partida, último jogo que você assistiu ou qualquer outro assunto sobre o esporte..."
        />
      </S.InputContainer>

      <S.ActionContainer
        onClick={() => {
          inputFileRef?.current && inputFileRef.current.click();
        }}
      >
        <S.ImageContainer>
          <p>
            <FaCamera /> Selecionar foto
          </p>

          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={inputFileRef}
          />
        </S.ImageContainer>

        <S.ButtonContainer>
          <S.Button onClick={handleSubmit}>Publicar</S.Button>
        </S.ButtonContainer>
      </S.ActionContainer>
    </S.PostContainer>
  );
};

export default CreatePost;
