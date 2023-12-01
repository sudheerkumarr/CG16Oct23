import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Nav from './components/nav'
import { Register } from './components/register';
import Login from './components/login';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Nav />
      <Register />
      <Login />
    </>
  )
}

export default App
