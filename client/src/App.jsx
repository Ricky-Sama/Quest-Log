import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login_page';
import Register from './pages/register_page';
import QuestBoard from './pages/quest_board';
import Note from './pages/Note';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register_page" element={<Register />} />
      <Route path="/quest_board" element={<QuestBoard />} />
      <Route path="/note" element={<Note />} />
    </Routes>
  );
}

export default App;