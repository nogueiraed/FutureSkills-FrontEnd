//http://localhost:3000/src/context/GlobalContext.jsx

import { useState, createContext } from "react";

export const Context = createContext([]);

// Cria um componente cujo estado pode ser compartilhado com outros componentes usando Context de React
// Context dde React permite que outros componentes possam acessar valores disponíveis em um outro contexto
export default function GlobalContext(props) {
  const [user, setUser] = useState({
    name: "",
    logged: false,
  });
  return (
    <Context.Provider value={{ user, setUser }}>
      {props.children}
    </Context.Provider>
  );
}
