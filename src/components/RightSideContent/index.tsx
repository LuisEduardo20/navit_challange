import { UserData } from "@/constants/user";

import * as S from "./styles";
import {
  Divider,
  LastPlays,
  LastPlaysResults,
  LastYearPlays,
  FriendsList,
} from "@/components";

const RightSideContent = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <h2>Suas Informações</h2>
          <a>Editar e Configurar</a>
        </S.Header>

        <Divider />

        <S.UserInfoContainer>
          <div>
            <h4>Gênero</h4>
            <p>{UserData.gender}</p>
          </div>
          <div>
            <h4>Altura</h4>
            <p>{UserData.height}m</p>
          </div>

          <div>
            <h4>Forehand</h4>
            <p>{UserData.forehand}</p>
          </div>

          <div>
            <h4>Backhand</h4>
            <p>{UserData.backhand}</p>
          </div>

          <div>
            <h4>Jogou</h4>
            <p>{UserData.last_play}</p>
          </div>

          <div>
            <h4>Entrou</h4>
            <p>
              em{" "}
              {new Intl.DateTimeFormat("pt-BR", {
                month: "long",
                year: "numeric",
              }).format(UserData.joined_at)}
            </p>
          </div>
        </S.UserInfoContainer>

        <LastPlays />

        <LastPlaysResults />

        <LastYearPlays />

        <FriendsList />
      </S.Content>
    </S.Container>
  );
};

export default RightSideContent;
