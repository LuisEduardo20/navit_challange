// import React from "react";
import * as S from "./styles";
import { FriendList } from "@/types/constants/friends";
import { useModal } from "@/components/hooks/useModal";

type Props = {
  data: FriendList;
};

const FriendCard = ({ data }: Props) => {
  const { handleOpenModal } = useModal();

  return (
    <S.Container onClick={handleOpenModal}>
      <S.Title>AA</S.Title>

      <S.ContentContainer>
        <S.Name>{data.name}</S.Name>
        <S.Nick>{data.nickname}</S.Nick>
      </S.ContentContainer>
    </S.Container>
  );
};

export default FriendCard;
