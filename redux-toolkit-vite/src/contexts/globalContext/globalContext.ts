import { createContext } from "react";

export interface InitialContext {
    name: string;
    id: number;
    setName: (React.Dispatch<React.SetStateAction<string>>);
    setId: (React.Dispatch<React.SetStateAction<number>>);
}

export const defaultContext = {
    name: '',
    id: 0,
    setName: () => {},
    setId:  () => {},
}

const GlobalContext = createContext<InitialContext | null>(defaultContext);

export default GlobalContext;