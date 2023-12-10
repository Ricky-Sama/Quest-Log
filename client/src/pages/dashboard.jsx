import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";

// Importing components
import Nav from "../components/Sidenav";
import quest_board from "./quest_board";
import Note from "./Note";
import CalandarWrappar from "../components/calendarwrapper/calendarwrapper";
import desert from "../assets/desert.png";


function Dashboard() {
  const title = "QuestLog".split('');

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${desert})`}}>
    <Nav />
    <div className="flex justify-between w-full px-8 border-b-2 border-blue-600">
        {title.map((char, index) => (
          <motion.span
            key={index}
            className="text-4xl font-bold tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            {char}
          </motion.span>
        ))}
    </div>
    <div className="flex justify-around w-full mt-4">
      <motion.button
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Link to="/Note">Log a Quest</Link>
      </motion.button>
      <motion.button
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Link to="/quest_board">Quest Board</Link>
      </motion.button>
      <motion.button
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Link to="/Calendar">Calendar</Link>
      </motion.button>
    </div>
  </div>
  );
}

export default Dashboard