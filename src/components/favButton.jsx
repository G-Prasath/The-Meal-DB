import { Heart } from "lucide-react";

const favButton = ({ meal, onToggle, isFav }) => {
  
  return (
    <button
    onClick={(e) => onToggle(meal)}
      className={`cursor-pointer absolute top-6 right-6 py-2 px-2 rounded-full 
    ${isFav ? "bg-red-500 text-white" : "bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white"} 
    text-md`}
    >
      <Heart
        size={14}
        className="transition"
        fill={isFav ? "currentColor" : "none"}
      />
    </button>
  );
};

export default favButton;
