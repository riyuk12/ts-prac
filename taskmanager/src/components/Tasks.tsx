import React,{useState} from 'react'

import './tasksStyles.css'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useData } from '../datalayer/datalayer';


type tasksprop={task:String,
filetype:String,
status:String,
description?:String
id:Number}



function Tasks( {task,filetype,status,description,id}:tasksprop) {
  const [open, setOpen] = useState(false);
  const {state,dispatch}=useData();

  const [complete,setComplete]=useState(false)

  const HandleToggle=()=>{
    setComplete(prev=>!prev)
  }



  const deletetasks=(id:Number)=>{
    dispatch({type:"DELETE_TASK",id:id})
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (

    <>
    <ListItemButton onClick={handleClick} sx={{backgroundColor:complete?"#2ECC71":"#212F3C",marginBlock:"10px"}}>
        <ListItemIcon>
          <InboxIcon sx={{backgroundColor:"#1B2631",padding:"10px", borderRadius:2, color:"#EBEDEF",}}/>
        </ListItemIcon>
        <ListItemText primary={task} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{backgroundColor:"#212F3C "}}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="description" secondary={description}  />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary={filetype} />
          </ListItemButton>
        </List>
        <List component="div" disablePadding onClick={HandleToggle}>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary={complete?"Complete":"Pending"}  />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            
            <ListItemText primary="delete item" onClick={()=>{deletetasks(id)}} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
    

    // <>
    // <h1>{task}</h1>
    // <h1>{description}</h1>
    // <h1>{status}</h1>
    // <h1>{filetype}</h1>
    // </>
  )
}

export default Tasks