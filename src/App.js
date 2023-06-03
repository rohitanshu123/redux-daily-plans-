import React, {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux';

import {addTask, deleteTask, updateTask} from "./features/activityreducers"





export const App = () => {

  const dispatch = useDispatch();

  const [task, settask] = useState("");

  const [newTask, setNewTask] = useState("")

  const taskData = useSelector((state)=>(state.task.value));










  return (
    <>

    <div>
    
    <div>
        <input type="text" placeholder='Enter your daily task' onChange={(event)=>{settask(event.target.value)}}/>

        <button type='submit' onClick={()=>(
          dispatch(addTask({
            id : taskData[taskData.length-1].id + 1,
            task: task
          }))
        )} >Add task</button>

        </div>

        <div>

        {
          taskData.map((task)=>{
            return(
              <div>
              <h1>{task.task}</h1>

              <input type='text' placeholder='enter new task' onChange={(e)=>{setNewTask(e.target.value)}}/>

              <button type='submit' onClick={
                dispatch(updateTask({
                  id : task.id,
                  task : newTask
                }))
              }>update</button>

              <button type='submit' onClick={()=>{
                dispatch(deleteTask({
                  id : task.id
                }))
              }} >Delete</button>

              </div>
            )
          })
        }

        </div>

</div>

    </>
  )
}
export default App;