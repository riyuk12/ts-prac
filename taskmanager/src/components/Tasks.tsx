import React,{useState} from 'react'

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


type tasksprop={task:String,
filetype:String,
status:String,
description?:String}



function Tasks( {task,filetype,status,description}:tasksprop) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (

    <>
    <ListItemButton onClick={handleClick} sx={{backgroundColor:"#212F3C",marginBlock:"2px"}}>
        <ListItemIcon>
          <InboxIcon sx={{backgroundColor:"#1B2631",padding:"2px", borderRadius:2, color:"#EBEDEF"}}/>
        </ListItemIcon>
        <ListItemText primary={task} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{backgroundColor:"#212F3C "}}>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="description" secondary={description}  />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={filetype} />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={status} />
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