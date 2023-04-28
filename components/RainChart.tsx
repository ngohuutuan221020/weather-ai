"use client";
import {
  AreaChart,
  Card,
  Title,
} from '@tremor/react';

type Props = {
  results: Root;
};
function RainChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    ).slice(1, 25);
  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Mưa (%)": results.hourly.precipitation_probability[i],
  }));
  const dataFormatter = (number: number) => `${number} %`;

  return (
    <Card>
      <Title>Xác suất mưa</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Mưa (%)"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default RainChart;
