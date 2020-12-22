import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloProvider,InMemoryCache,ApolloClient} from '@apollo/client'

const client=new ApolloClient({
  uri:'https://spacexdata.herokuapp.com/graphql',
  cache:new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);