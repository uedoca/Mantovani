import React, { createContext, useState, useContext } from 'react';
import { themes, getOppositeTheme } from '../config/styles';

const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState(themes.light);

  const trocaTema = () => {
    setTema(getOppositeTheme(tema));
  };

  return (
    <TemaContext.Provider value={{ tema, trocaTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = () => {
  const context = useContext(TemaContext);
  if (!context) {
    throw new Error('useTema deve ser usado dentro de um TemaProvider');
  }
  return context;
};