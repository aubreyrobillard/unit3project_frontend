import React, { useState } from "react";
import { GiCookingGlove } from "react-icons/gi";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <GiCookingGlove
              className="star"
              color={ratingValue <= rating ? "#D25251" : "#BAC3C2"}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
