import { createContext } from 'react';


interface ContextProps {
    isMenuOpen: boolean;
    //metodos
    toglleSideMenu: () => void;
}


export const UIContext = createContext({} as ContextProps);