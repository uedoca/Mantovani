import React from 'react';
import { TemaProvider } from './src/contexts/TemaContext';
import HomeScreen from './src/components/HomeScreen';

const App = () => {
  return (
    <TemaProvider>
      <HomeScreen />
    </TemaProvider>
  );
};

export default App;