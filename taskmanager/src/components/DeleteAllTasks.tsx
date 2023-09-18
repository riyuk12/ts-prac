import React from 'react'
import { Button } from '@mui/material'
import { useData } from '../datalayer/datalayer'

function DeleteAllTasks() {
  const {state,dispatch}=useData()

  const DeleteAll=()=>{
    dispatch({type:'DELETE_ALL'})

  }
  return (
    <div className="delete_button" >
      <Button variant="contained" onClick={DeleteAll} >Delete All Tasks</Button>
    </div>
  )
}

export default DeleteAllTasks