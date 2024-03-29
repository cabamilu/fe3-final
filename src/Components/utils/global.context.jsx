import { createContext, useContext, useEffect, useReducer } from "react";
import { actions } from "./Actions";

const initialState = {
    darkMode: false,
    dentists: [],
    favs: []
}

const ContextGlobal = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
  case actions.UPDATE_DENTISTS:
      return {...state, dentists: action.payload}
  case actions.TOGGLE_MODE:
      return {...state, darkMode: !state.darkMode}
  case actions.ADD_FAVORITE:
      const alreadyAdded = state.favs.some((fav) => fav.id === action.payload.id)
      const favsToAdd = alreadyAdded ? state.favs : [...state.favs, action.payload]      
      return {...state, favs: favsToAdd}
  case actions.REMOVE_FAVORITE:
    const favsRemove = state.favs.filter((fav) => fav.id !== action.payload)
    return {...state, favs: favsRemove}
  case actions.REMOVE_FAVORITES_ALL:
    return {...state, favs: []}
  default:
      return state
  }
}

const getFavsFromLocalStorage = () => {
  const favs = localStorage.getItem("favs")
  return favs ? JSON.parse(favs) : []
}

const stateInitializer = () => {
  const favs = getFavsFromLocalStorage()
  return {...initialState, favs}
}

const ContextProvider = ({children}) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(appReducer, initialState, stateInitializer)

  const data = { state, dispatch }

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs])

  return (
      <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  )
}

export default ContextProvider

export const useAppStates = () => useContext(ContextGlobal)
