import { ReactElement } from "react";
import * as S from "./styles";

type Props = {
  title: string;
  icon: ReactElement;
  color: string;
};

const Card = ({ title, icon, color }: Props) => {
  return (
    <S.CardContainer color={color}>
      {icon}
      <S.CardTitle>{title}</S.CardTitle>
    </S.CardContainer>
  );
};

export default Card;
