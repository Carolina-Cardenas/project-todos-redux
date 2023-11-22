
import { createSlice } from '@reduxjs/toolkit';


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
      addTask: (state, action) => {
        const newTask = {
          id:  Date.now(),
          text: action.payload.task,
          completed:false
        };
        state.push(newTask);
      },
      deleteTask: (state, action) => {
        const { id } = action.payload;
        console.log("en eleminar ")
        return state.filter((item) => item.id !== id);
      
      },
      toggleTodo: (state, action) => {
        const { id } = action.payload;
        const todo = state.find((todo) => todo.id === id); 
      
        if (todo) {
          todo.completed = !todo.completed;
         
        }
      },

      
    },
  });
  export const { toggleTodo } = tasksSlice.actions;
  export const addTask = tasksSlice.actions.addTask;
  export const deleteTask = tasksSlice.actions.deleteTask;

  