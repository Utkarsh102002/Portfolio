import React from "react";
import p from "../assets/1.jpg";
import ay from "../assets/1739558696937.jpeg";
import s from "../assets/s.jpeg";
import sh from "../assets/su.jpeg"
import { motion } from "framer-motion";

// Shortcut motion components for readability
const MH2 = motion.h2;
const MDiv = motion.div;

// Array of testimonials (edit this to add/remove your own people/reviews)
const testimonials = [
  {
    name: "Sujal Chandrakar",
    role: "Software Engineer at Frido ",
    review:
      "Utkarsh is a visionary developer. His attention to detail and creativity blew us away. Our project was a massive success because of him.",
    image: s,
  },
  {
    name: "Shubham Shrivastava",
    role: "UI/UX Designer at Ting",
    review:
      "Working with Utkarsh was an absolute pleasure. He brings design and code together like magic. Highly recommend him!",
    image: sh,
  },
  {
    name: "Ayush Shrivastava",
    role: "Product Manager at Dalmia Cememnt",
    review:
      "From concept to execution, Utkarsh handled everything flawlessly. His work ethic and innovation are unmatched.",
    image: ay,
  },
  {
    name: "Pratham Dharmani",
    role: "Software Developer At TCS",
    review:
      "Utkarsh transformed our outdated project into something modern and powerful. His skills are world-class.",
    image: p,
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Section Title */}
      <MH2
        initial={{ opacity: 0, y: -50 }} // animation: fade-in from top
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16"
      >
        What People Say
      </MH2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((testi, idx) => (
          <MDiv
            key={testi.name + idx}
            initial={{ opacity: 0, y: 50 }} // animation: fade-in from bottom
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }} // stagger effect for each card
            viewport={{ once: true }} // animate only once when visible
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-1"
          >
            {/* Person Image */}
            <img
              src={testi.image}
              alt={testi.name}
              className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
              loading="lazy"
            />

            {/* Review Text */}
            <p className="text-gray-200 italic mb-4">"{testi.review}"</p>

            {/* Name & Role */}
            <h3 className="text-lg font-semibold">{testi.name}</h3>
            <p className="text-sm text-gray-400">{testi.role}</p>
          </MDiv>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
