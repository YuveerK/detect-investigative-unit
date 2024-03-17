import React from "react";

const ServicesCard = ({ title, description, icon }) => {
  // Adjusting description truncation logic to add ellipsis only if needed
  const truncatedDescription =
    description && description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;

  return (
    <div className="flex min-w-[300px] h-[200px] my-8 mx-4 p-6 flex-col items-center justify-between  border  border-gray-600 rounded-md">
      <div className="text-white text-lg font-bold mb-2">{icon}</div>
      <h1 className="text-xl font-thin text-white text-center">{title}</h1>
      <p className="text-sm text-gray-600 text-center">
        {truncatedDescription}
      </p>
      <a href="#" className="text-orange-600 font-semibold hover:underline">
        EXPLORE MORE
      </a>
    </div>
  );
};

export default ServicesCard;
