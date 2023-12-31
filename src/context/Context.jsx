import { createContext } from "react";

// Wir erstellen ein Context und exportieren ihn damit er überall verfügbar ist, wenn wir ihn importieren
export const loadingContext = createContext();
export const dataContext = createContext();
export const filterContext = createContext();
export const favoritesContext = createContext();
export const shoppingcartContext = createContext();
export const userContext = createContext();
export const usersContext = createContext();
