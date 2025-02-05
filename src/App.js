import {BrowserRouter, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './components/Main/Main';
import Matches from './components/Matches/Matches';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [user, setUser] = useState(null);
  const [matches,setMatches] = useState(null);


  const handleLogout = () => {
    setUser(null);
    return <Navigate to="/" replace />;
  };

  const handleLogin=(user)=>{
    setUser(user);
    return <Navigate to="/main" replace />;
  }
  
  return (
    <div className="App">
<BrowserRouter>
{
    (window.location.pathname === '/main' ||
      window.location.pathname === '/matches' ||
      window.location.pathname === '/messages' ||
      window.location.pathname === '/profile') && (
        <Nav handleLogout={handleLogout} />
      )
  }
        <Routes>
          <Route path="/"element={<Login handleLogin={handleLogin} user={user}  />}/>
          <Route path="/signup" element={<Signup handleLogin={handleLogin}/>} />
          <Route path="/main" element={ <Main user={user} matches={matches} setMatches={setMatches}/>}/>
          <Route path="/matches" element={<Matches user={user} matches={matches} setMatches={setMatches}/>}/>
          <Route path="/messages" element={<Messages matches={matches} />} />
          <Route path="/profile" element={<Profile handleLogout={handleLogout} user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
