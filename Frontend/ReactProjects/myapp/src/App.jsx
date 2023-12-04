import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/nav'
import { Register } from './components/register';
import Login from './components/login';
import Users from './components/users';
import Customers from './components/customers';
import Counter from './components/counter';
import CounterClassComp from './components/counterClassComp';

function App() {
  return (
    <>

      <Nav />
      <Counter />
      <CounterClassComp />
      <Register />
      <Login />
      <Users />
      <Customers />
    </>
  )
}

export default App
