import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import * as S from "./styles";

const LastYearPlays = () => {
  const options = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Ago/2023",
          "",
          "",
          "",
          "",
          "",
          "Nov/2024",
          "",
          "",
          "",
          "",
          "Fev/2024",
        ],
      },
    },
    series: [
      {
        name: "Qtd. Jogos",
        data: [2, 9, 15, 20, 12, 6, 8, 10, 8, 10, 11, 12],
      },
    ],
  };

  return (
    <S.Container>
      <h3>SEUS ÚLTIMOS 20 JOGOS EM</h3>

      <Chart
        options={options.options as ApexOptions}
        series={options.series}
        type="bar"
      />
    </S.Container>
  );
};

export default LastYearPlays;
