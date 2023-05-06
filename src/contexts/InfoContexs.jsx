import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getTriviaChallenge from "../services/getTriviaChallenge";

const Context = createContext({});
export function InfoContextProvider({ children }) {
  const [questions, setQuestions] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getTriviaChallenge(setQuestions);
  }, []);

  const value = { questions, setQuestions, navigate };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const InfoContext = () => {
  const info = useContext(Context);
  return info;
};
// cargar la info de la API y la seteo en el estado, reiniciar al estado inicial  info
