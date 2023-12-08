import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
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
            <a onClick={handleNav} 
              href="#portfolio" 
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <GrProjects size={20}/> 
             <span >Portfolio</span>
            </a>
            <a onClick={handleNav} 
              href="#contact" 
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <AiOutlineMail size={20}/> 
             <span >Contact</span>
            </a>
            <a onClick={handleNav} 
              href="#resume" 
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
             <AiOutlineProject size={20}/> 
             <span >Resume</span>
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
          <a href="#portfolio" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <GrProjects size={20} />
          </a>
          <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <AiOutlineMail size={20} />
          </a>
          <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease_in duration-300">
            <AiOutlineProject size={20} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default SideNav;