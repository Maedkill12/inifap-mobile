import { createContext, useReducer } from "react";

export const SearchContext = createContext();
export const actionTypes = {
  SET_SEARCH: "SET_SEARCH",
  SET_CATEGORY: "SET_CATEGORY",
};
const initialValue = {
  search: "",
  category: "",
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return { ...state, search: action.payload };
    case actionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialValue);
  return (
    <SearchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
