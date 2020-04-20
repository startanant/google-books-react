import React, { useContext } from 'react';
import Moment from 'react-moment';
import Rating from './Rating';
import SearchContext from '../utils/SearchContext';
import TruncateText from './Truncate';


const BookList = () => {
    const { results, onFavorite } = useContext(SearchContext);

    return (
        results.map((book, index) => {
            console.log("=========creating a card for==============");
            console.log(book);
            return (
                <div className="col-12 mb-2 mx-1" key={index}>
                    <div className="card mb-3 mw-100">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <img src={book.image} className="card-img" alt={`${book.title}`} />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href={book.infoLink}>{book.title}</a>
                                        <button type="button" className="btn btn-light ml-3" onClick={() => onFavorite(book)}>
                                            <span className="text-danger">{window.location.href.includes("saved") ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>}</span>
                                        </button>
                                    </h5>
                                    <p className="card-text"><strong>Description:</strong></p> 
                                    {book.description ? <TruncateText lines={3} text={book.description} infoLink={book.infoLink}/> 
                                    : <p>No description available</p>}
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Author(s):</strong> {book.authors ? book.authors.join(", ") : "Unknown"}</li>
                                    <li className="list-group-item"><strong>Published:</strong> <Moment format="MMMM DD, YYYY">{book.publishedDate}</Moment></li>
                                    <li className="list-group-item"><strong>Rating:</strong> 
                                        {book.averageRating ? <Rating averageRating={book.averageRating} /> : "No ratings"} 
                                        ({book.ratingsCount ? book.ratingsCount : 0} reviews)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })


    )
}

export default BookList;