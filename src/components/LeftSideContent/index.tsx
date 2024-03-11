import { IoSearch } from "react-icons/io5";
// import { slide as Menu } from "react-burger-menu";

import * as S from "./styles";
import { Divider, LoggedUserThumb, NavigationMenu } from "@/components";

const LeftSideContent = () => {
  return (
    // <Menu pageWrapId="">
    <S.Container>
      <S.Content>
        <LoggedUserThumb />

        <Divider />

        <S.SearchContainer>
          <div>
            <input type="text" placeholder="Procurar na LetzPlay" />
            <IoSearch size={25} />
          </div>
        </S.SearchContainer>

        <Divider />

        <NavigationMenu />

        <Divider />
      </S.Content>
    </S.Container>
    // </Menu>
  );
};

export default LeftSideContent;
