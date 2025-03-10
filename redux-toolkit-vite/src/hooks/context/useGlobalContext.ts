import { useContext } from "react";
import GlobalContext, { defaultContext, InitialContext } from "../../contexts/globalContext/globalContext";

const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) { 
        return defaultContext;
    }

    return context as InitialContext
}

export default useGlobalContext
