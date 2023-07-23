import { createContext, useContext, useState } from 'react';

export const SearchContext = createContext({});

function SearchProvider({ children }) {
  const [search, setSearch] = useState('');
  const [checkURL, setCheckURL] = useState(false);

  function ingredientsSearch(dishName) {
    setSearch(dishName);

    if (window.location.href.includes('dish' || 'menu')) {
      setCheckURL(true);
    }
  }

  return (
    <SearchContext.Provider
      value={{ ingredientsSearch, search, setSearch, checkURL, setCheckURL }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);

  return context;
}

export { SearchProvider, useSearch };
