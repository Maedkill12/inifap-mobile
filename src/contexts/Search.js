import { createContext, useReducer } from "react";

export const SearchContext = createContext();
export const actionTypes = {
  SET: "SET",
};
const initialValue = "";

const searchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET:
      return action.payload;
    default:
      return state;
  }
};

const SearchProvider = ({ children }) => {
  const [search, dispatch] = useReducer(searchReducer, initialValue);
  return (
    <SearchContext.Provider value={{ search, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
