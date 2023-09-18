import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useData } from './datalayer/datalayer'
import Tasklist from './components/Tasklist'
import Taskinput from './components/Taskinput'

function App() {
  const {state,dispatch}=useData();

  console.log(state);
  return (
    <>
    <Taskinput />
    <Tasklist/>
    
    </>
  )
}

export default App
