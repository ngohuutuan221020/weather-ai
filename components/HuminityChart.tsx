"use client";
import {
  AreaChart,
  Card,
  Title,
} from '@tremor/react';

type Props = {
  results: Root;
};
function HumidityChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    ).slice(1, 25);
  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Độ ẩm (%)": results.hourly.relativehumidity_2m[i],
  }));
  const dataFormatter = (number: number) => `${number}%`;

  return (
    <Card>
      <Title>Mức độ độ ẩm</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Độ ẩm (%)"]}
        colors={["yellow"]}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default HumidityChart;
