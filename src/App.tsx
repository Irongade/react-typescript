import React, {useState} from 'react';
import TodoList from "./components/TodoList"
import NewTodo from "./components/NewTodo"
import {Todo} from "./todo.models"

// import logo from './logo.svg';
// import './App.css';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}])
  } 

  const deleteTodo = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
