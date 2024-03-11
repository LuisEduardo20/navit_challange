import {
  FaHistory,
  FaRegAddressCard,
  FaRegCalendar,
  FaSearch,
  FaTrophy,
} from "react-icons/fa";
import Card from "./Card";
import * as S from "./styles";
import { AiOutlineOrderedList } from "react-icons/ai";

const data = [
  {
    title: "Meus Jogos Pendentes",
    icon: <FaRegCalendar />,
    color: "blue",
  },
  {
    title: "Reservar Quadra",
    icon: <FaRegAddressCard />,
    color: "green",
  },
  {
    title: "Encontrar Torneios",
    icon: <FaSearch />,
    color: "purple",
  },
  {
    title: "Meus Rankings",
    icon: <AiOutlineOrderedList />,
    color: "purple",
  },
  {
    title: "Meus Torneios",
    icon: <FaTrophy />,
    color: "purple",
  },
  {
    title: "Histórico de Partidas",
    icon: <FaHistory />,
    color: "green",
  },
];

const FeedOptions = () => {
  return (
    <div>
      <S.Scroller>
        {data.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </S.Scroller>
    </div>
  );
};

export default FeedOptions;
