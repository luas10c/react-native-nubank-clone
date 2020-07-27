import React from 'react';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './pages/Home';

const App = () => (
  <>
    <StatusBar backgroundColor="#8b10ae" style="light" />
    <HomeScreen />
  </>
);

export default App;
