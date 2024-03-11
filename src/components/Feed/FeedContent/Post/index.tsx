import { GiInjustice } from "react-icons/gi";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaLocationDot, FaShareNodes } from "react-icons/fa6";
import { FaCaretDown, FaRegCalendar, FaShare, FaTrophy } from "react-icons/fa";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

import * as S from "./styles";
import { UserData } from "@/constants/user";

// type Props = {};

// const Post = (props: Props) => {
const Post = () => {
  return (
    <S.Container>
      <S.Header className="card_header">
        <img
          src="https://media.istockphoto.com/id/165685189/pt/vetorial/emblema-de-t%C3%A9nis.jpg?s=1024x1024&w=is&k=20&c=cD7RVIoZZperz6m9HemaZ_wxA-fumMvTiiCjxU37-mw="
          alt="Team Shield"
        />

        <div>
          <h4>
            <FaTrophy /> Torneio de Tênis
          </h4>
          <p>@royal hà 4 horas</p>
        </div>

        <button>
          <FaCaretDown size={18} />
        </button>
      </S.Header>

      <S.Content className="card_content">
        <h2>BD</h2>

        <S.MatchResultContainer>
          <h3>
            <IoIosCloseCircleOutline /> Navit Digital 1 <p>@navitdigital 1</p>
          </h3>

          <S.MatchResult>
            <strong>3</strong>
            <strong>8</strong>

            <h2>RF</h2>
          </S.MatchResult>

          <h4>
            <p>NavitDigital 2</p> Navit Digital 2{" "}
            <IoIosCheckmarkCircleOutline />
          </h4>
        </S.MatchResultContainer>
      </S.Content>

      <S.MatchInfos className="match_infos">
        <h5>
          <GiInjustice /> Já jogaram 3 vezes, veja o H2h
        </h5>
        <p>
          <FaRegCalendar /> 03/03/2024, Domingo as 12:10hs
        </p>
        <p>
          <FaLocationDot /> Tênis - Quadra 04 - Coberta
        </p>
      </S.MatchInfos>

      <S.Social className="social">
        <div>
          <BiLike size={20} />
          <BiDislike size={20} />
          <FaShareNodes size={20} />
        </div>

        <div>
          <img src={UserData.img} alt="User Picture" width={40} height={40} />
          <img src={UserData.img} alt="User Picture" width={40} height={40} />
          <img src={UserData.img} alt="User Picture" width={40} height={40} />
        </div>
      </S.Social>

      <S.Footer className="card_footer">
        <img src={UserData.img} alt="User Picture" width={45} height={45} />
        <div>
          <input type="text" placeholder="Adicione um comentário" />
          <FaShare />
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default Post;
