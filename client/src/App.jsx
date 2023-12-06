// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/login_page';
import Register from './pages/register_page';

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Login} />
      <Route path="/register_page" component={Register} />
    </Routes>
  )
}

export default App;
