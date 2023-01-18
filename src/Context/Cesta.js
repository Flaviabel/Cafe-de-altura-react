import { createContext, useState } from "react";

export const Cesta = createContext();

function CestaProvider({ children }) {
    const [count, setCount] = useState(0);
    const [countUnidad, setCountUnidad] = useState(0);
    return (
        <Cesta.Provider value={{ count, setCount, countUnidad, setCountUnidad }}>
            {children}
        </Cesta.Provider>
    )
}
export default CestaProvider;