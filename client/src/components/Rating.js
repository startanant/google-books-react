import React from 'react';
import Ratings from 'react-star-ratings';

const Rating = (props) => {
    const { averageRating } = props;
    return (
        <Ratings 
            rating={averageRating} 
            starRatedColor="blue" 
            numberOfStars={5} 
            starDimension="20px"
            starSpacing="1px" 
            name='rating'
        />
    )
}

export default Rating;
