import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaBell,
  FaBlackTie,
  FaEdit,
  FaGift,
  FaGraduationCap,
  FaHome,
  FaIdCard,
  FaRegCalendar,
  FaShare,
  FaSignOutAlt,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import { GiInjustice, GiTicket } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiListOrdered } from "react-icons/ri";

export const FirstSection = [
  {
    color: "blue",
    icon: <FaHome />,
    text: "Página Inicial",
  },
  {
    color: "blue",
    icon: <FaUser />,
    text: "Meu Perfil",
  },
  {
    color: "blue",
    icon: <FaBell />,
    text: "Notificações",
  },
  {
    color: "blue",
    icon: <FaRegCalendar />,
    text: "Painel de Jogos",
  },
  {
    color: "blue",
    icon: <IoDocumentTextOutline />,
    text: "Pagamentos",
  },
];

export const SecondSection = [
  {
    color: "purple",
    icon: <RiListOrdered />,
    text: "Meus Rankings",
  },
  {
    color: "purple",
    icon: <FaTrophy />,
    text: "Meus Torneios",
  },
  {
    color: "purple",
    icon: <FaShare />,
    text: "Encontre Torneios",
  },
];

export const ThirdSection = [
  {
    color: "green",
    icon: <FaGraduationCap />,
    text: "Minhas aulas",
  },
  {
    color: "green",
    icon: <FaGraduationCap />,
    text: "Agende uma Aula",
  },
  {
    color: "green",
    icon: <FaGraduationCap />,
    text: "Agende sua Reposição",
  },
  {
    color: "green",
    icon: <GiTicket />,
    text: "Alugue uma Quadra",
  },
  {
    color: "green",
    icon: <FaIdCard />,
    text: "Reserve um Horário de Clube",
  },
];

export const FourthSection = [
  {
    color: "orange",
    icon: <PiSquaresFourFill />,
    text: "Histórico de Jogos",
  },
  {
    color: "orange",
    icon: <BsGraphUpArrow />,
    text: "Estatísticas",
  },
  {
    color: "orange",
    icon: <GiInjustice />,
    text: "Head to Head",
  },
];

export const FifthSection = [
  {
    color: "cyan",
    icon: <FaGift />,
    text: "Convidar Amigo",
  },
  {
    color: "cyan",
    icon: <FaBlackTie />,
    text: "Quero ser Gestor",
  },
];

export const SixthSection = [
  {
    color: "pink",
    icon: <FaEdit />,
    text: "Editar e Configurar",
  },
];

export const SeventhSection = [
  {
    color: "grey",
    icon: <FaSignOutAlt color="black" />,
    text: "Sair",
  },
];
