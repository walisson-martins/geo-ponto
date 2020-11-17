// Projeto GeoPonto -> Arquivo principal --> Por aqui eu seto para o componente Routers --> para chamar o meu 
// componente Index.js
// Responsável: Walisson

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Routers from './src/router/Routers';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <Routers />
    </>
  );
}

export default App;