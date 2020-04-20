import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import ListContainer from '../components/ListContainer';
import SearchContext from '../utils/SearchContext';
import Jumbotron from '../components/Jumbotron';

const Saved = () => {
    
    const [searches, setSearch] = useState({
        results: [],
        onFavorite: (book) => {
            console.log("=========Deleting===========")
            console.log(book);
            const { _id } = book;
            API.removeBook(_id)
                .then(data => {
                    getBooks();
                })
        }
    })
    
    const getBooks = () => {
        API.getSaved()
            .then(res => {
                console.log("============get books data received===========")
                console.log(res.data);
                setSearch({
                    ...searches,
                    results: res.data
                })
            });
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <SearchContext.Provider value={searches}>
            <Jumbotron />
            <ListContainer />
        </SearchContext.Provider>

    )
}

export default Saved;