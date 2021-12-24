import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Context } from './context/Context';

import { TopBar } from './components/TopBar'
import { Home } from './pages/Home';
import { Single } from './pages/Single';
import { Write } from './pages/Write';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Settings } from './pages/Settings';

export const App = () => {
  const { user } = React.useContext(Context)

  return (
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route 
            exact path="/register" 
            element={
              user ? <Home/> : <Register/>
            }
          />
          <Route 
            exact path="/login" 
            element=
            {
              user ? <Home /> : <Login />
            }
          />
          <Route 
            exact path="/write" 
            element={
              user ? <Write/> : <Home />
              }
          />
          <Route 
            exact path="/settings" 
            element={
              user ? <Settings/> : <Home />
              }
          />
          <Route exact path="/post/:postId" element={<Single/>}/>
        </Routes>
      </Router>
  );
}
