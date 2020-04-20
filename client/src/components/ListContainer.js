import React, { useContext } from 'react';
import BookList from './BookList';
import NoMatch from './NoMatch';
import SearchContext from '../utils/SearchContext';


const ListContainer = () => {
    const { results } = useContext(SearchContext);
    
    return (
        <div className="container">
            <div className="row">
                {results.length === 0 ?  <NoMatch /> : <BookList />}
            </div>
        </div>
    )
}

export default ListContainer;