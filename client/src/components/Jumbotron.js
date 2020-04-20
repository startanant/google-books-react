import React from 'react';
import Search from "./Search";

const Jumbotron = () => {
    let page = "search"
    let title = "Begin Your Book Quest"
    let tagline = "Search for books (via the Google Books API) and save them for later."
    
    if (window.location.href.includes("saved")){
        page = "saved"
        title = "Reading List"
        tagline = "My favorite books."
    }

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{tagline}</p>
                
                {page === "search" && <><hr className="my-4" /> <Search /></>}
            </div>
        </div>
    )
}

export default Jumbotron;