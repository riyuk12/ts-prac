import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useData } from '../datalayer/datalayer'



type submitType=any


function Taskinput() {
    const {state,dispatch}=useData()
    const {register,handleSubmit}=useForm();

    const submit=(data:submitType)=>{
        dispatch({type:'ADD_TASK',
        task:data.taskname,
        id:state.tasks.length,
        filetype:"txt",
        status:"pending",
        description:data.description})
    } 

  return(
    <form onSubmit={handleSubmit(data=>submit(data))}>
        <input {...register("taskname")} type="text" placeholder='task title' />
        <input {...register("description")} type="text" placeholder='task description'/>
        <input type="submit" />
    </form>
  )
}



export default Taskinput