import { Children, createContext, useState } from "react";

export const Cesta = createContext();

function CestaProvider({ children }) {
    const [count, setCount] = useState(0);
    const [deleteCount, setDeleteCount] = useState({count})
    return (
        <Cesta.Provider value={{ count, setCount, deleteCount , setDeleteCount }}>
            {children}
        </Cesta.Provider>
    )
}
export default CestaProvider;