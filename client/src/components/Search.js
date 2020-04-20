import React, { useContext } from 'react';
import searchContext from '../utils/SearchContext';

const Search = () => {
    const { search, onClick, onChange } = useContext(searchContext);

    return (
        <form className="form-inline row">
            <div className="form-group col-lg-12">
                <div className="col-sm-10">
                    <input className="form-control w-100" type="search" onChange={(event) => onChange(event.target.value)} 
                        placeholder="Search by title, author, or subject" aria-label="Search" value={search ? search : ""} />
                </div>
                <div className="col-sm-2 mx-auto">
                    <button className="btn btn-success" type="submit" onClick={(event) => {
                        event.preventDefault();
                        onClick(search)
                    }}>Search</button>
                </div>
            </div>
        </form>
    )
}

export default Search;
