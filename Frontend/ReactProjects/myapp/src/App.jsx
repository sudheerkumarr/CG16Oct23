import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/nav'
import { Register } from './components/register';
import Login from './components/login';
import Users from './components/users';
import Customers from './components/customers';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Nav />
      <Register />
      <Login />
      <Users />
      <Customers />
    </>
  )
}

export default App
