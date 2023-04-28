"use client";
import {
  AreaChart,
  Card,
  Title,
} from '@tremor/react';

type Props = {
  results: Root;
};
function TempChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    ).slice(1, 25);
  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Chỉ số tia UV": results.hourly.uv_index[i],
    "Nhiệt độ (C)": results.hourly.temperature_2m[i],
  }));
  const dataFormatter = (number: number) => `${number}°C`;

  return (
    <Card>
      <Title>Nhiệt độ & Chỉ số tia UV</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Nhiệt độ (C)", "Chỉ số tia UV"]}
        colors={["yellow", "rose"]}
        minValue={0}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default TempChart;
