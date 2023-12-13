import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import QuestBoard from './pages/QuestBoard';
import Note from './pages/Note';
import Dashboard from "./pages/Dashboard";
import SideNav from "./components/Sidenav";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";
import './index.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/RegisterPage" element={<Register />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/QuestBoard" element={<QuestBoard />} />
      <Route path="/Note" element={<Note />} />
      <Route path="/SearchPage" element={<SearchPage />} />
      
    </Routes>
  );
}

export default App;