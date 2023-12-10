import { motion } from 'framer-motion';
import List from '../components/dragCards/list';
import grid from '../assets/grid.svg';
import Nav from '../components/Sidenav';

function QuestBoard() {
  const title = "What's your Quest for Today?".split('');

  return (

    <div className="min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${grid})` }}>
        <Nav />
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
      <List />            
    </div>  
  );
}

export default QuestBoard;