import Image from 'next/image';

import weatherCodeToString from '@/lib/weatherCodeToString';
import {
  MoonIcon,
  SunIcon,
} from '@heroicons/react/solid';

import CityPicker from './CityPicker';

MoonIcon;
type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
};
function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-5">  
      {/* Header */}
      <div className="pb-5">
        <h1 className="text-6xl font-bold text-center">{decodeURI(city)}</h1>
        <hr className="my-2" />
        <p className="text-xs text-gray-400 text-center">
        Kinh độ {long}, Vĩ độ {lat}
        </p>
      </div>
      {/* Chon City */}
      <CityPicker />
      <hr className="my-10" />
      {/* Thong Tin */}
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div className="">
          <p className="text-xl">
            {new Date().toLocaleDateString("vi-VN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-extralight">
            Múi giờ ở {Intl.DateTimeFormat().resolvedOptions().timeZone} (
            {results.timezone})
          </p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("vi-VN", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {results.current_weather.temperature.toFixed(1)}°C
            </p>
            {/* weatherCodeToString */}
            <p className="text-right font-extrabold text-lg">
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-2 py-5'>
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
          <SunIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Bình Minh</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("vi-VN", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
          <SunIcon className="h-10 w-10 text-gray-400" />
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Hoàng hôn</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunset[0]).toLocaleTimeString("vi-VN", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default InformationPanel;
