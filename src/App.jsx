import { React } from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { tasksSlice } from "./redux/tasksSlice";
import {CountTask} from './components/CountTask';;

const reducer = combineReducers({
  tasks: tasksSlice.reducer,
});
const store = configureStore({ reducer });
export const App = () => {
  return (
    <Provider store={store}>
       <div className="body">
      <AddTodo />
      <TodoList />
      <CountTask /> 
      </div>
    </Provider>
   
  );
};
