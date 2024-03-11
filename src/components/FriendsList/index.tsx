import { FaUsers } from "react-icons/fa";
import * as S from "./styles";
import FriendCard from "./FriendCard";
import { Friends } from "@/constants/friends";

const FriendsList = () => {
  return (
    <S.Container>
      <S.Title>
        <FaUsers /> AMIGOS
      </S.Title>

      <S.Content>
        {Friends.map((friend) => {
          return <FriendCard key={friend.id} data={friend} />;
        })}
      </S.Content>
    </S.Container>
  );
};

export default FriendsList;
