import { FC, useReducer, ReactNode } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    isMenuOpen: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const toglleSideMenu = () => {
        dispatch({ type: 'UI - ToggleMenu' })
    };

    return (
        <UIContext.Provider value={{
            ...state,

            //Metodos
            toglleSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
};