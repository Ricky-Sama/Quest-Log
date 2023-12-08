import React, { useState } from 'react';
import Card from './card';

const List = () => {
    const [cards, setCards] = useState([{title: "Card 1", id: 0}, {title: "Card 2", id: 1}, {title: "Card 3", id: 3}]);
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
        <div className="list">
            <div className="add-card-form">
                <input type="text" value={newCard} className="new-card-input" onChange={(e) => setNewCard(e.target.value)}/>
                <button onClick={addCard}>New Card</button>
            </div>
            {cards.map((card) => <Card title={card.title} key={card.id} onDelete={() => deleteCard(card.id)} />)}
        </div>
    );
}

export default List;