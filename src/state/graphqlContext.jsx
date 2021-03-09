import fetch from 'cross-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://localhost:7891/graphql',
  fetch,
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
  
export default client;
