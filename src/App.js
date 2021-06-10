import React, { useState } from 'react'
import useFetchJobs from './useFetchJobs'
import Job from './Job'
import { Container, Nav } from 'react-bootstrap'
import JobsPage from './JobsPage'
import SearchForm from './SearchForm'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import {Route, Link} from 'react-router-dom'


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
