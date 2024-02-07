import React from 'react';
import Link from "./Link";

const Card = ({ imageUrl, title, description, links }) => {

  const handleDetailClick = links => {
    console.log('links', links)

    return (
        <Link
          key={links.label}
          to={links.path}
          className="p-4 m-2 cursor-pointer"
          activeClassName="font-bold pl-2"
        >
          {links.label}
        </Link>
    )
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
      <img src={imageUrl} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDetailClick}
        >
          Go to Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
