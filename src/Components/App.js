import React from 'react';
import "./App.css"
import { ApolloProvider } from '@apollo/client'
import client from './GQL_Config/GQL_Config'

import Students from './Students'

function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">

        <p>APOLLO GRAPHQL <br />
          Data from local server</p>
        <Students />

      </div>
    </ApolloProvider>
  );
}

export default App;
