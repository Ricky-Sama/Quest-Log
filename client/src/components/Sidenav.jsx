import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsPerson, BsJournalBookmarkFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  
//////////////////// creates the side nav bar mobile view ////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden bg-w text-white" /> 
      {
        nav ? (
          <div className="fixed w-full h-screen bg-white/20 flex flex-col justify-center items-center z-20">
            <a onClick={handleNav} 
              href="#header" 
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <AiOutlineHome size={20} className="hover:shadow-lg"/> 
             <span >Home</span>
            </a>
            <a onClick={handleNav} 
              href="#header" 
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <BsPerson size={20}/> 
             <span >About Me</span>
            </a>
            <a 
              onClick={() => handleNav("/Note")}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <BsJournalBookmarkFill size={20}/> 
             <span >Logbook</span>
            </a>
            <a onClick={handleNav} 
              href="#search" 
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <AiOutlineSearch size={20}/> 
             <span >Search</span>
            </a>
            <a onClick={handleNav} 
              href="#calendar" 
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <FaRegCalendarAlt size={20}/> 
             <span >Calendar</span>
            </a>
          </div>
        ) : ( ////////////// creates the side nav bar desktop view ////////////////////////////////////////////////////////////////////////////////////////////
          ""  
        )
      }
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a href="#header" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <AiOutlineHome size={20} />
          </a>
          <a href="#header" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <BsPerson size={20} />
          </a>
          <a href="#logbook" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <BsJournalBookmarkFill size={20} />
          </a>
          <a href="#search" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <AiOutlineSearch size={20} />
          </a>
          <a href="#calendar" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <FaRegCalendarAlt size={20} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default SideNav;