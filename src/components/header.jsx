
import React from "react";
import { HandPlatterIcon, Search } from "lucide-react";
import { Link } from "react-router-dom";

const header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <Link to="/">
        <div className="flex items-center gap-x-2">
          <HandPlatterIcon size={32} className="text-emerald-600" /> <span className="text-xl font-semibold text-slate-700">Food Store</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/" className="text-emerald-600 font-semibold text-md">Categories</Link>
        <Link to="/" className="text-emerald-600 font-semibold text-md">Favourite</Link>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Meals"
          />
          <Search size={16} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link to="#" className="block">
          Home
        </Link>
        <Link to="#" className="block">
          About
        </Link>
        <Link to="#" className="block">
          Contact
        </Link>
       
      </div>
    </nav>
  );
};

export default header;
