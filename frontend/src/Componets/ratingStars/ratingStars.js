import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const starIcons = [
  <FaStar />,
  <FaStar />,
  <FaStar />,
  <FaStar />,
  <FaStar />,
];

function RatingStars({ value, readOnly, onChange }) {
  const [rating, setRating] = useState(value || 0);

  const handleClick = (newRating) => {
    if (!readOnly) {
      setRating(newRating);
      onChange(newRating);
      
    }
  };

  return (
    <div>
      {starIcons.map((icon, index) => {
        const ratingValue = index + 1;
        const isSelected = ratingValue <= rating;

        return (
          <span
            key={index}
            onClick={() => handleClick(ratingValue)}
            style={{ cursor: readOnly ? "default" : "pointer" }}
          >
            {isSelected ? <FaStar color="#ffc107" /> : <FaStar />}
          </span>
        );
      })}
    </div>
  );
}

export default RatingStars;