import { FaAmbulance, FaCheckCircle } from "react-icons/fa";
import * as S from "./styles";
import { FaUserXmark } from "react-icons/fa6";

const LastPlaysResults = () => {
  return (
    <S.Container>
      <h3>SEUS RESULTADOS DOS ÚLTIMOS 20 JOGOS</h3>

      <S.DataContainer color="green">
        <S.Content>
          <div>
            <FaCheckCircle />
            <p>15</p>
          </div>

          <h4>Jogado</h4>
        </S.Content>

        <S.Content>
          <div>
            <FaUserXmark />
            <p>0</p>
          </div>

          <h4>W.O.</h4>
        </S.Content>

        <S.Content>
          <div>
            <FaAmbulance />
            <p>0</p>
          </div>

          <h4>Desistência</h4>
        </S.Content>
      </S.DataContainer>

      <S.DataContainer color="red">
        <S.Content>
          <div>
            <FaCheckCircle />
            <p>15</p>
          </div>

          <h4>Jogado</h4>
        </S.Content>

        <S.Content>
          <div>
            <FaUserXmark />
            <p>0</p>
          </div>

          <h4>W.O.</h4>
        </S.Content>

        <S.Content>
          <div>
            <FaAmbulance />
            <p>0</p>
          </div>

          <h4>Desistência</h4>
        </S.Content>
      </S.DataContainer>
    </S.Container>
  );
};

export default LastPlaysResults;
