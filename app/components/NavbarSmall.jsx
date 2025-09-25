import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Menu + Close icons
import { Link } from "react-router"; // ✅ import Link

export default function Navsmall() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden block relative">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white w-[50px] h-[50px] flex items-center justify-center"
      >
        {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-14 right-2 w-48 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        
        <ul className="flex flex-col text-white">
            <Link to="/" onClick={() => setOpen(false)}>
                <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer">Home</li>
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
                <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer">About</li>
            </Link>
            <Link to="/projects" onClick={() => setOpen(false)}>
                <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer">Projects</li>
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
                <li className="px-4 py-3 hover:bg-gray-700 cursor-pointer">Contact</li>
            </Link>
         
        </ul>

      </div>
    </div>
  );
}
