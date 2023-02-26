import { createContext, useState } from "react";

export const darkMode = createContext();

const DarkModeProvider = ({ children }) => {

const [mode,setMode] = useState(true)
const values = {
    mode, 
    setMode
}
    return (
        <darkMode.Provider value={values} >
            {children}
        </darkMode.Provider>
    )
}

export default DarkModeProvider