import TestimonialCarousel from './TestimonialCarousel'; 
import React, { useState } from 'react';
export default function Testimonials() {


  return (
    <section className="testimonials">

    <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>
   <TestimonialCarousel />
   </section>
  );
}