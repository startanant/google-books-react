import React, { useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import ListContainer from '../components/ListContainer';
import SearchContext from '../utils/SearchContext';

const Books = () => {
    //add a new state for results
    const [searches, setSearch] = useState({
        search: "",
        results: [],
        onClick: (search) => {
            API.searchGoogle(search)
                .then(res => {
                    setSearch({
                        ...searches,
                        search,
                        results: res
                    })
            })
        },
        onChange: (search) => {
            setSearch({
                ...searches,
                search
            });
        },
        onFavorite: (book) => {
            API.saveBook(book)
                .then(res => {
                    console.log(res);
                })
        }
    })

    //move functions out of searches
    
    return (
        <SearchContext.Provider value={searches}>
            <Jumbotron />
            <ListContainer />
        </SearchContext.Provider>

    )
}

export default Books;