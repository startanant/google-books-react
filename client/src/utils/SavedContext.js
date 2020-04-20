import {createContext} from "react";

const SavedContext = createContext({
    results: [],
    onFavorite: () => undefined
});

export default SavedContext;