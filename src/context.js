import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const url = `&s=${query}`;
  const NoPhotoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  const { loading, data: movies, error } = useFetch(url);

  return (
    <AppContext.Provider
      value={{ setQuery, movies, loading, query, error, NoPhotoUrl }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
