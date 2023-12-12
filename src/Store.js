import {createContext, useState } from "react";

export const ContextStore = createContext({
  newData: [],
  addData: () => {},
  setNewData: () => {},
});

export const GlobalContextProvider = ({ children}) => {
  const [newData, setNewData] = useState([]);
  const addData = (item) => {
    setNewData([...newData, item]);
  };

  return (
    <ContextStore.Provider value={{ addData, newData, setNewData }}>
      {children}
    </ContextStore.Provider>
  );
};
