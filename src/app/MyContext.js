'use client'
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
    
  const Context = createContext()
  const [sortedList, setSortedList] = useState([]);
  
  const handleUpdateList = (newList) => {
    setSortedList(newList);
  };

  return (
    <MyContext.Provider value={{ sortedList, handleUpdateList }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
