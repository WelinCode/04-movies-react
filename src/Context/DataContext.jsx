import React, { createContext, useState } from 'react';
import { useFecth } from '../Hooks/useFecth';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [query, setQuery] = useState('disney');
  const { isLoading, error, data } = useFecth(`s=${query}`);
  return (
    <DataContext.Provider
      value={{
        setQuery,
        isLoading,
        error,
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
