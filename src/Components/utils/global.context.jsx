import { createContext, useContext, useEffect, useReducer } from "react";
import { actions } from "./Actions";
import { getDentists } from "../../Api/dentists";

const initialState = {
    darkMode: false,
    dentists: [],
    favs: []
}

export const ContextGlobal = createContext(undefined);

const appReducer = (state, action) => {
  switch (action.type) {
  case actions.UPDATE_DENTISTS:
      return {...state, dentists: action.payload}
  case actions.TOGGLE_MODE:
      return {...state, darkMode: !state.darkMode}
  case actions.ADD_FAVORITE:
      const alreadyAdded = state.favs.some((favId) => favId === action.payload)
      const favsAdd = alreadyAdded ? state.favs :  [...state.favs, action.payload]

      if (!alreadyAdded) saveFavsToLocalStorage(favsAdd)
      
      return {...state, favsAdd}
  case actions.REMOVE_FAVORITE:
    const favsRemove = state.favs.filter((favId) => favId != action.payload)

    saveFavsToLocalStorage(favsRemove)

    return {...state, favsRemove}
  default:
      return state
  }
}

const saveFavsToLocalStorage = (favs) => {
  localStorage.setItem("favs", JSON.stringify(favs))
}

const getFavsFromLocalStorage = () => {
  const favs = localStorage.getItem("favs")

  return favs ? JSON.parse(favs) : []
}

const stateInitializer = () => {
  const favs = getFavsFromLocalStorage()
  return {...initialState, favs}
}

export const ContextProvider = ({children}) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(appReducer, initialState, stateInitializer)

  const data = { state, dispatch }

  useEffect(() => {
      const getAllDentists = async () => {
          const data = await getDentists()
          dispatch({type: actions.UPDATE_DENTISTS, payload: data})
      }

      getAllDentists()
  }, [])

  return (
      <ContextGlobal.Provider value={data}>{children}</ContextGlobal.Provider>
  )
}

export const useAppStates = () => useContext(ContextGlobal)
