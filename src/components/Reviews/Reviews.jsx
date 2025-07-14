import React from "react";
import { reviews } from "./ReviewsData";
import TestimonialsSection from "./TestimonialsSection.jsx";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews-container" id="reviews">
      <h1>Отзывы наших учеников :</h1>
      <TestimonialsSection reviews={reviews} />
    </div>
  );
}

export default Reviews;