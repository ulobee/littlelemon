import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
import React, { useState } from 'react';
export default function Testimonials() {
    const testimonials = [
        { name: "Alex Johnson", description: "Absolutely loved the vibrant flavors at Spice Haven. It's a must-visit for anyone who loves exploring new tastes." },
        { name: "Samantha Lee", description: "The cozy ambiance and the warm, spicy aroma made my evening unforgettable. Highly recommend their chef's special." },
        { name: "Ethan Wright", description: "A culinary journey that takes your taste buds on an adventure. The fusion dishes are phenomenal." },
        { name: "Olivia Smith", description: "Such a delightful experience! The dishes are crafted with care, and the staff goes above and beyond." },
        { name: "Daniel Kim", description: "From the appetizers to the desserts, every dish was a hit. Spice Haven truly knows how to deliver an exceptional dining experience." },
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="carousel">
            <button className="prev" onClick={prevTestimonial}></button>      <div className="testimonial-card">
        <h2>{testimonials[currentIndex].name}</h2>
        <p>{testimonials[currentIndex].description}</p>
      </div>
  
<button className="next" onClick={nextTestimonial}></button>
    </div>
  );
}