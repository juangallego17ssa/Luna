import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating';

function StarRating() {
  const [rating, setRating] = useState(); // initial rating value

  const ratingChanged = (newRating) => {
    setRating(newRating); // catch the rating value
  };

  return (
    <Rating
    count={5}
    value={rating}
    onChange={ratingChanged}
    size={40}
    color1={"#d2d2d2"}
    color2={'#ffd700'} />
  );
}

export default StarRating;

