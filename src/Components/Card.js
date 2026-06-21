import React from 'react';
import { TbTrafficCone } from 'react-icons/tb';
import useNavigation from '../hooks/use-navigation';

const Card = ({ imageUrl, title, description, link }) => {
  const { navigate } = useNavigation();

  const handleDetailClick = () => {
    if(link === ""){
      return;
    }

     navigate(link)  
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
      {imageUrl
        ? <img src={imageUrl} alt={title} className="w-full" />
        : <div className="w-full h-48 bg-[#E8EDF2] flex items-center justify-center gap-2 border-b-2 border-dashed border-[#F58426]/30">
            <TbTrafficCone className="text-[#F58426]/60 text-xl" />
            <span className="text-[#F58426]/60 font-bold tracking-widest uppercase text-sm">Coming Soon</span>
            <TbTrafficCone className="text-[#F58426]/60 text-xl" />
          </div>
      }
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-[#006BB6] text-white font-bold py-2 px-4 rounded hover:bg-[#003F7F] transition-colors duration-200"
          onClick={handleDetailClick}
        >
          { link !== "" ? "Go to Detail" : "Coming Soon"}
        </button>
      </div>
    </div>
  );
};

export default Card;
