import { UserData } from "@/constants/user";

import * as S from "./styles";

const LoggedUserThumb = () => {
  return (
    <S.Container>
      <section>
        <img src={UserData.img} alt="User Picture" />

        <div>
          <h4>{UserData.name}</h4>
          <p>{UserData.tag}</p>
        </div>
      </section>
    </S.Container>
  );
};

export default LoggedUserThumb;
