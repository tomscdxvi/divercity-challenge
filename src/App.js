import React, { useContext } from 'react'
import Home from './Home'
import Register from './RegisterPages/Register'
import Login from './LoginPages/Login'
import { Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
  )
}

export default App;

