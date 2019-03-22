import { createContext } from "react";

const cartContext = createContext();

export const cartContextProvider = cartContext.Provider;
export default cartContext;
