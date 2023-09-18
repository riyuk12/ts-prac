import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useData } from '../datalayer/datalayer'

import { TextField } from '@mui/material'



type submitType=any


function Taskinput() {
    const {state,dispatch}=useData()
    const {register,handleSubmit,reset}=useForm();

    const submit=(data:submitType)=>{
        dispatch({type:'ADD_TASK',
        task:data.taskname,
        id:state.tasks.length,
        filetype:"txt",
        status:"pending",
        description:data.description})
        reset()
    } 

  return(
    <form onSubmit={handleSubmit(data=>submit(data))} className="form-ctn">
        <div className="input-container">
        <TextField id="standard-basic" label="enter Task" variant="standard" {...register("taskname")} />
        <TextField id="standard-basic" label="enter Task description" variant="standard" {...register("description")} />
          {/* <input  type="text" placeholder='task title' /> */}
          {/* <input  type="text" placeholder='task description'/> */}
          <input type="submit"   className='submit'/>
        </div>
    </form>
  )
}



export default Taskinput