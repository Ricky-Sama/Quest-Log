import React, { useState } from 'react';
import Card from './card';
import { motion, AnimatePresence } from 'framer-motion';

const List = () => {
    const [cards, setCards] = useState([{title: "Card 1", id: 0}]);
    const [newCard, setNewCard] = useState('');

    const addCard = () => {
        const card = {title: newCard, id: cards.length};
        setCards(prevCards => [...prevCards, card]);
        setNewCard('');
    }

    const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    }
    
    return (
        <div className="items-center flex flex-col py-9 px-9">
          <div className="flex space-x-4 mb-8 shadow-xl">
            <input 
              type="text" 
              value={newCard} 
              onChange={(e) => setNewCard(e.target.value)}
              className="px-3 py-2 rounded-lg shadow-sm"
            />
            <button 
              onClick={addCard}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green shadow-xl"
            >
              New Card
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card title={card.title} key={card.id} onDelete={() => deleteCard(card.id)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
    );
}

export default List;