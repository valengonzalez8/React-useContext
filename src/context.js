import { createContext } from "react";

export const CurrentUser = createContext({
    userID: null, 
    userData: null,
    setUserID: (user) => {} //es una funcion placeholder hasta q se actualize con el setUser en App.js
});




