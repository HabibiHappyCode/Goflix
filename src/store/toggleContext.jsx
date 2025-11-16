import { createContext, useState } from "react";

const TogggleContext = createContext({
    toggle: true,
    handleChangeTogggle: () => { }
})

export const TogggleContextProvider = ({ children }) => {
    const [sideBarToggle, setSideBarToggle] = useState(true);

    const handleChangeTogggle = () => {
        setSideBarToggle(prevToggle => !prevToggle);
        console.log('malik')
    }

    const ctxContext = {
        toggle: sideBarToggle,
        handleChangeTogggle
    }

    return <TogggleContext.Provider value={ctxContext}>{children}</TogggleContext.Provider>
}

export default TogggleContext;