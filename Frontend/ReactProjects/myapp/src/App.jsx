import { useState, createContext } from 'react'
import Nav from './components/nav'
import { Register } from './components/register';
import Login from './components/login';
import Users from './components/users';
import Customers from './components/customers';
import Counter from './components/counter';
import Home from './components/home';
import CounterClassComp from './components/counterClassComp';
import Employees from './components/employee';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddEmployee from './components/addEmployee';
import UpdateEmployee from './components/updateEmployee';
import Search from './components/search';
import Logout from './components/logout';
import Parent from './components/Parent';


function App() {

  // functional component state
  const [count, setCount] = useState(0);

  // increment function
  const incr = () => {
    setCount(count + 1);
  }

  const decr = () => {
    setCount(count - 1);
  }


  return (
    <>
      {console.log(count)}
      <Nav />
      <Routes>
        <Route path="/" element={<Home count={count} />} />
        <Route path="/home" element={<Navigate to="/" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employee/add" element={<AddEmployee />} />
        <Route path="/employee/update/:id" element={<UpdateEmployee />} />
        <Route path="/employee/search" element={<Search />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/parent" element={<Parent count={count} incr={incr} decr={decr} />} />
      </Routes >
    </>
  )
}

export default App
