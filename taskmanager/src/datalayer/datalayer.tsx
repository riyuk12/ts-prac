import React,{createContext,useContext,useReducer,ReactNode,Dispatch} from 'react'

type task={
  task:String,
  id:Number,
  filetype:String,
  status:"pending"|"complete"
}

type taskList={
  tasks:task[],
  tab:"todo"|"doing"|"done"
}

const initialState:taskList={
  tasks:[],
  tab:"todo"
}


const context = createContext<{
  state: taskList;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

type Action = {type:'ADD_TASK',
              task:String,
              id:Number,
              filetype:String,
              status:"pending"|"complete"
              }|{type:'DELETE_TASK',
              id:Number  
            };

const dataReducer = (state: taskList, action: Action): taskList => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks:[...state.tasks,{
        task:action.task,
        id:action.id,
        filetype:action.filetype,
        status:"pending"
      }] };
    
    case 'DELETE_TASK':
      return { ...state, tasks:[...state.tasks.filter(task=>task.id!==action.id)]
       };
    
    default:
      return state;
  }
};


export const Datalayer:React.FC<{ children: ReactNode }>=({children})=>{
  const [state,dispatch]=useReducer(dataReducer,{
    tasks:[],
    tab:"todo"
  }
  )
  return(
    <context.Provider value={{state,dispatch}}>{children}</context.Provider>
  )
}


export const useData = () => {
  const datacontext = useContext(context);
  if (datacontext === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return datacontext;
};