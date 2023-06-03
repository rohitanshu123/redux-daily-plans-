import {createSlice} from "@reduxjs/toolkit";
import {taskList} from "../tasks";

const taskSlice = createSlice({
    name : "task",
    initialState:  {value : taskList},

    reducer : {
        addTask : (state, action)=>{
            state.value.push(action.payload)

        },

        deleteTask: (state,action)=>{

            state.value = state.value.filter((task)=>task.id!==action.payload.id)

        },

        updateTask: (state, action)=>{
            state.value.map((task)=>{
                if(task.id= action.payload.id) {
                    task.task =  action.payload.task
                }
            })

        }    
    }
}
)

const {addTask, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;
