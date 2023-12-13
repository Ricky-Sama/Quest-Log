import { motion } from 'framer-motion';
import List from '../components/dragCards/list';
import grid from '../assets/grid.svg';
import Nav from '../components/Sidenav';
import CalendarWrapper from "../components/calendarwrapper/calendarwrapper";
import { useState } from 'react';

function QuestBoard() {
  const title = "What's your Quest for Today?".split('');

  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (

    <div className="min-h-screen bg-cover bg-center flex flex-col bg-sky-100 " style={{ backgroundImage: `url(${grid})` }}>
        <Nav toggleCalendar={toggleCalendar} />
      <div className="flex justify-between w-full px-8">
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
      <List />    <aside>{showCalendar && <CalendarWrapper />} </aside>          
    </div>  
  );
}

export default QuestBoard;