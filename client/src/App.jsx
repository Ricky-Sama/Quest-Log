// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Switch } from "react-router-dom";
import Login from './pages/login_page'
import Register from './pages/register_page'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register_page" component={Register} />
    </Switch>
  )
}

export default App;
