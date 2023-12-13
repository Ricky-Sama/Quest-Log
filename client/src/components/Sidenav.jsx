import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiAbstract050, GiGearHammer } from 'react-icons/gi';
import { TbBuildingCottage } from "react-icons/tb";
import { RiQuillPenFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

const SideNav = ({ toggleCalendar }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleCalendarClick = () => {
    toggleCalendar();
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden bg-w text-white" />
      {
        nav ? (
          <div className="fixed w-full h-screen bg-white/20 flex flex-col justify-center items-center z-20 bg-custom-background">
            <Link to="/dashboard"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <TbBuildingCottage size={20} />
              <span>Home</span>
            </Link>
            <Link to="/Profile"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <GiGearHammer size={20} />
              <span>Profile</span>
            </Link>
            <Link to="/Note"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <RiQuillPenFill size={20} />
              <span>Logbook</span>
            </Link>
            <Link to="/QuestBoard"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <GiAbstract050 size={20} />
              <span>Quest Board</span>
            </Link>
            <Link to="/search"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineSearch size={20} />
              <span>Search</span>
            </Link>
            <a onClick={handleCalendarClick}
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <FaRegCalendarAlt size={20} />
              <span>Calendar</span>
            </a>
          </div>
        ) : null
      }
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <Link to="/Dashboard" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <TbBuildingCottage size={20} />
          </Link>
          <Link to="/Profile" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <GiGearHammer size={20} />
          </Link>
          <Link to="/Note" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <RiQuillPenFill size={20} />
          </Link>
          <Link to="/QuestBoard" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <GiAbstract050 size={20} />
          </Link>
          <Link to="/SearchPage" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <AiOutlineSearch size={20} />
          </Link>
          <a onClick={handleCalendarClick} className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <FaRegCalendarAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

SideNav.propTypes = {
  toggleCalendar: PropTypes.func.isRequired,
};

export default SideNav;