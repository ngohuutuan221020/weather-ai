import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import HumidityChart from '@/components/HuminityChart';
import InformationPanel from '@/components/InformationPanel';
import RainChart from '@/components/RainChart';
import StatCard from '@/components/StatCard';
import TempChart from '@/components/TempChart';
import fetchWeatherQueries from '@/graphql/queries/fetchWeatherQueries';
import cleanData from '@/lib/cleanData';
import getBasePath from '@/lib/getBasePath';

export const revalidate = 60;
type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};
async function WeatherPage({ params: { city, lat, long } }: Props) {
  const clients = getClient();
  const { data } = await clients.query({
    query: fetchWeatherQueries,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });
  const results: Root = data.myQuery;
  const dataToSend = cleanData(results, city);
  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weatherData: dataToSend
    })
  })
  const GPTdata = await res.json();
  const {content} = GPTdata;
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} long={long} lat={lat} results={results} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          {/* Header */}
          <div className="pb-5">
            <h2 className="text-xl fort-bold">Tổng quan hôm nay</h2>
            <p className="text-sm text-gray-400">
              Cập nhật cuối cùng: {""}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>
          {/* Chat GPT */}
          <div className="m-2 mb-5">
            <CalloutCard message={content} />
          </div>
          {/* Tong Quan */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Nhiệt độ tối đa"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />
            <StatCard
              title="Nhiệt độ tối thiểu"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />
            <div>
              <StatCard
                title="UV Index"
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color="rose"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message={"Tia cực tím cao vào ban ngày!"}
                  warring
                />
              )}
            </div>
            <div className="flex space-x-3">
              <StatCard
                title="Tốc độ gió"
                metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                color="cyan"
              />
              <StatCard
                title="Hướng gió"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results = {results}/>
          <HumidityChart results = {results}/>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
