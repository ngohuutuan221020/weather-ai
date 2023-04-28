import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

export const getClient = () => {
    const client = new ApolloClient({
      uri: "http://localhost:5001/api/weather",
      headers: {
        Authorization:
          "apikey sansare::stepzen.io+1000::3d34493eaa21b9172f4355faa93dacccc8ea23df443bed48ec81f9c516a96b22",
      },
      cache: new InMemoryCache(),
    });
    return client;
  };
  