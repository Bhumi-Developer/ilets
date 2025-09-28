import React from 'react';
import { TestimonialCard } from "./testimonial-card.jsx";

const testimonials = [
  {
    name: "Ayesha Khan",
    band: "7.5",
    content: "The speaking practice boosted my confidence. Personalized tips made all the difference!",
    imageQuery: "student%20portrait%201",
  },
  {
    name: "Rohit Sharma",
    band: "8.0",
    content: "Mock tests felt exactly like the real exam. The detailed analysis helped me focus.",
    imageQuery: "student%20portrait%202",
  },
  {
    name: "Mia Chen",
    band: "7.0",
    content: "The AI score feedback was super helpful to track my progress each week.",
    imageQuery: "student%20portrait%203",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="text-balance text-2xl font-semibold sm:text-3xl text-center text-white ">
          Student success stories
        </h2>
        <p className="mt-2 max-w-prose mx-auto text-center text-gray-600 dark:text-gray-300">
          Real feedback from learners who improved their bands with us.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
