import React from 'react'
import { useData } from '../datalayer/datalayer'
import Tasks from './Tasks'


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';


function Tasklist() {
  

    const {state,dispatch}=useData()
  return (
    <>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',borderRadius:2,overflow:"none" ,backgroundColor:"#283747"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{borderRadius:2,backgroundColor:"inherit"}}>
          Tasks
        </ListSubheader>
      }
    >
    {state.tasks.map(task=>(<div className='taskcontainer' ><Tasks task={task.task} filetype={task.filetype} status={task.status} description={task.description} id={task.id}/></div>))}
      </List>
    </>
  )
}

export default Tasklist