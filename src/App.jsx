import { React } from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { tasksSlice } from "./redux/tasksSlice";

const reducer = combineReducers({
  tasks: tasksSlice.reducer,
});
const store = configureStore({ reducer });
export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
};
