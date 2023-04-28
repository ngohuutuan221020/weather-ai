import { gql } from '@apollo/client/';

const fetchWeatherQueries = gql`
  query MyQuery(
    $current_weather: String
    $daily: String
    $hourly: String
    $latitude: String
    $longitude: String
    $timezone: String
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      latitude: $latitude
      longitude: $longitude
      hourly: $hourly
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQueries;
// import { gql } from '@apollo/client/';

// const fetchWeatherQueries = gql`
//   query MyQuery(
//     $current_weather: String
//     $daily: String = "apparent_temperature_max,apparent_temperature_min,sunrise,sunset,temperature_2m_max,temperature_2m_min,time,uv_index_clear_sky_max,uv_index_max,weathercode"
//     $hourly: String = "apparent_temperature,precipitation,precipitation_probability,rain,relativehumidity_2m,showers,snow_depth,snowfall,temperature_2m,time,uv_index,uv_index_clear_sky,windgusts_10m"
//     $latitude: String
//     $longitude: String
//     $timezone: String
//   ) {
//     myQuery(
//       current_weather: $current_weather
//       daily: $daily
//       latitude: $latitude
//       longitude: $longitude
//       hourly: $hourly
//       timezone: $timezone
//     ) {
//       current_weather {
//         is_day
//         temperature
//         time
//         weathercode
//         winddirection
//         windspeed
//       }
//       daily {
//         apparent_temperature_max
//         apparent_temperature_min
//         sunrise
//         sunset
//         temperature_2m_max
//         temperature_2m_min
//         time
//         uv_index_clear_sky_max
//         uv_index_max
//         weathercode
//       }
//       daily_units {
//         apparent_temperature_max
//         apparent_temperature_min
//         sunrise
//         sunset
//         temperature_2m_max
//         temperature_2m_min
//         time
//         uv_index_clear_sky_max
//         uv_index_max
//         weathercode
//       }
//       elevation
//       generationtime_ms
//       hourly {
//         apparent_temperature
//         precipitation
//         precipitation_probability
//         rain
//         relativehumidity_2m
//         showers
//         snow_depth
//         snowfall
//         temperature_2m
//         time
//         uv_index
//         uv_index_clear_sky
//         windgusts_10m
//       }
//       hourly_units {
//         apparent_temperature
//         precipitation
//         precipitation_probability
//         rain
//         relativehumidity_2m
//         showers
//         snow_depth
//         snowfall
//         temperature_2m
//         time
//         uv_index
//         uv_index_clear_sky
//         windgusts_10m
//       }
//       latitude
//       longitude
//       timezone
//       timezone_abbreviation
//       utc_offset_seconds
//     }
//   }
// `;

// export default fetchWeatherQueries;
