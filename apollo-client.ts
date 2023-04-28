import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

// let client: ApolloClient<any> | null = null;
const {
  REACT_APP_STEPZEN_API_KEY,
  REACT_APP_STEPZEN_ENDPOINT
} = process.env
export const getClient = () => {
  const client = new ApolloClient({
    headers: {
      Authorization: `Apikey sansare::stepzen.net+1000::13370240966cd2cfd80040ae9430192e9428d1272fc56645a7cd4e01383e51cf`,
    },
    uri: "https://sansare.stepzen.net/api/weather-ai/__graphql",
    cache: new InMemoryCache(),
  });
  return client;
};
