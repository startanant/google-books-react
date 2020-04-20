import { createContext } from "react";

const SearchContext = createContext({
    search: "",
    results: [],
    onClick: () => undefined,
    onChange: () => undefined,
    onFavorite: () => undefined
});

export default SearchContext;