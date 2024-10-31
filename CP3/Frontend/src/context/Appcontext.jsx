import React,{ createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const Appcontext = createContext();

const AppContextProvider = (props) => {
  const val = {
    doctors,
  };

  return (
    <Appcontext.Provider value={val}>
      {props.children}
    </Appcontext.Provider>
  );
};

export default AppContextProvider;
