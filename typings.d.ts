interface CurrentWeather {
  is_day: number;
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}
interface Daily {
  apparent_temperature_max: [number];
  apparent_temperature_min: [number];
  sunrise: [string]
  sunset: [string]
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string]
  uv_index_clear_sky_max: [number];
  uv_index_max: [number];
  weathercode: [number];
}
interface DailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weathercode: string;
}
interface Hourly {
  apparent_temperature: [number];
  precipitation: [number];
  precipitation_probability: [number];
  rain: [number];
  relativehumidity_2m: [number];
  showers: [number];
  snow_depth: [number];
  snowfall: [number];
  temperature_2m: [number];
  time: [string];
  uv_index: [number];
  uv_index_clear_sky: [number];
  windgusts_10m: [number];
}
interface HourlyUnits {
  apparent_temperature: string;
  precipitation: string;
  precipitation_probability: string;
  rain: string;
  relativehumidity_2m: string;
  showers: string;
  snow_depth: string;
  snowfall: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
  windgusts_10m: string;
}
interface Root {
  current_weather: CurrentWeather
  daily: Daily
  daily_units: DailyUnits
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly
  hourly_units: HourlyUnits
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

// export interface Root {
//   latitude: number
//   longitude: number
//   generationtime_ms: number
//   utc_offset_seconds: number
//   timezone: string
//   timezone_abbreviation: string
//   elevation: number
//   current_weather: CurrentWeather
//   hourly_units: HourlyUnits
//   hourly: Hourly
//   daily_units: DailyUnits
//   daily: Daily
// }

// export interface CurrentWeather {
//   temperature: number
//   windspeed: number
//   winddirection: number
//   weathercode: number
//   is_day: number
//   time: string
// }

// export interface HourlyUnits {
//   time: string
//   temperature_2m: string
//   relativehumidity_2m: string
//   apparent_temperature: string
//   precipitation_probability: string
//   precipitation: string
//   rain: string
//   showers: string
//   snowfall: string
//   snow_depth: string
//   windgusts_10m: string
//   uv_index: string
//   uv_index_clear_sky: string
// }

// export interface Hourly {
//   time: string[]
//   temperature_2m: number[]
//   relativehumidity_2m: number[]
//   apparent_temperature: number[]
//   precipitation_probability: number[]
//   precipitation: number[]
//   rain: number[]
//   showers: number[]
//   snowfall: number[]
//   snow_depth: number[]
//   windgusts_10m: number[]
//   uv_index: number[]
//   uv_index_clear_sky: number[]
// }

// export interface DailyUnits {
//   time: string
//   weathercode: string
//   temperature_2m_max: string
//   temperature_2m_min: string
//   apparent_temperature_max: string
//   apparent_temperature_min: string
//   sunrise: string
//   sunset: string
//   uv_index_max: string
//   uv_index_clear_sky_max: string
// }

// export interface Daily {
//   time: string[]
//   weathercode: number[]
//   temperature_2m_max: number[]
//   temperature_2m_min: number[]
//   apparent_temperature_max: number[]
//   apparent_temperature_min: number[]
//   sunrise: string[]
//   sunset: string[]
//   uv_index_max: number[]
//   uv_index_clear_sky_max: number[]
// }
