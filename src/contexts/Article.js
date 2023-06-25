import { createContext, useReducer } from "react";

const initialState = {
  articles: [],
  favorites: [],
};
export const actionTypes = {
  fetchAll: "FETCH_ALL",
  fetchSingle: "FETCH_SINGLE",
  addFavorite: "ADD_FAVORITE",
  removeFavorite: "REMOVE_FAVORITE",
};
export const ArticleContext = createContext();

const articlesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fetchAll:
      return { ...state, articles: action.payload };
    case actionTypes.addFavorite:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case actionTypes.removeFavorite:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

const ArticleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articlesReducer, initialState);

  return (
    <ArticleContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
