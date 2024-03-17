import React from "react";

const TestimonialCard = ({ name, title, testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[600px] h-[400px] mt-8 bg-gray-900 p-4 flex flex-col items-center justify-center">
      <p className="font-bold text-white text-xl mb-2">{name}</p>
      <p className="text-white text-justify">{title}</p>
      <p className="text-white text-left ">{testimonial.substring(0, 100)}</p>
    </div>
  );
};

export default TestimonialCard;
