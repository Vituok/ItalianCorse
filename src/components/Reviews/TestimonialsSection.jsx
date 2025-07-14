import React from "react";
import TestimonialCard from "./TestimonialCard.jsx";


export default function TestimonialsSection({ reviews }) {
  return (
    <div className="testimonials-container">
      {reviews
      .filter(r => r && r.text && r.name && r.city && r.avatar && typeof r.rate === 'number')
      .map((review) => (
        <TestimonialCard
          key={review.id}
          text={review.text}
          name={review.name}
          city={review.city}
          avatar={review.avatar}
          rate={review.rate} 
        />
      ))}
    </div>
  );
}

