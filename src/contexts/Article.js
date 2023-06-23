import { createContext, useReducer } from "react";

const initialState = {
  articles: [],
};
export const actionTypes = {
  fetchAll: "FETCH_ALL",
  fetchSingle: "FETCH_SINGLE",
};
export const ArticleContext = createContext();

const articlesReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.fetchAll:
      return { ...state, articles: action.payload };
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
