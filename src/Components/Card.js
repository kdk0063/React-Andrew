import React from 'react';
import useNavigation from '../hooks/use-navigation';

const Card = ({ imageUrl, title, description, link }) => {
  const { navigate } = useNavigation();

  const handleDetailClick = () => {
     navigate(link)  
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
          className="bg-[#5C8D89] text-white font-bold py-2 px-4 rounded"
          onClick={handleDetailClick}
        >
          Go to Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
