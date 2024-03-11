import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import * as S from "./styles";

const LastPlays = () => {
  const options = {
    options: {
      chart: {
        id: "basic-bar",
        stacked: true,
        stackType: "100%",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: ["Simples", "Duplas", "Rankings", "Torneios"],
      },
    },
    series: [
      {
        name: "Vitórias",
        data: [30, 40, 45, 50],
      },
      {
        name: "Derrotas",
        data: [23, 44, 33, 10],
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
        // width="500"
      />
    </S.Container>
  );
};

export default LastPlays;
