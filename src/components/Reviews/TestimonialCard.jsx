import React from "react";
import "./Reviews.css"
import {motion} from "framer-motion";


export default function TestimonialCard({ text, name, city, avatar, rate }) {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="testimonial-card">
      <p className="testimonial-text">“{text}”</p>
      {(typeof rate === 'number' && rate > 0) && (
  <p className="testimonial-rate">{'⭐'.repeat(rate)}</p>
)}
      <div className="testimonial-author">
        <img src={avatar} alt={name} className="author-avatar" />
        <div>
          <div className="author-name">{name}</div>
          <div className="author-city">{city}</div>
         
        </div>
      </div>
    </motion.div>
  );
}



