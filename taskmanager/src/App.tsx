import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useData } from './datalayer/datalayer'
import Tasklist from './components/Tasklist'
import Taskinput from './components/Taskinput'
import DeleteAllTasks from './components/DeleteAllTasks'

function App() {
  const {state,dispatch}=useData();

  console.log(state);
  return (
    <div className='main-container'>
    <Taskinput />
    <Tasklist/>
    <DeleteAllTasks/>
    
    </div>
  )
}

export default App
