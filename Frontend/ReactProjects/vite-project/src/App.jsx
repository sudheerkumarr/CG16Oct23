import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
import { useState, createContext } from 'react';



export const LoginContext = createContext();

function App() {

  const [login, setLogin] = useState({
    email: "test@example.com",
    role: "Employee",
    isLogin: true
  });

  const value = { login, setLogin };


  return (
    <div>
      <LoginContext.Provider value={value}>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </LoginContext.Provider>
    </div >
  )
}

export default App
