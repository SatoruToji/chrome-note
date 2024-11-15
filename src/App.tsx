import React, { useState } from 'react'
import './App.scss'
import {InputField} from './components/InputField'
import { Todo } from './models'
import { TodoList } from './components/TodoList'

export const App: React.FC = () =>{
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  console.log(todos)

  return<div className='App'>
    <span className='heading'>taskify</span>

    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    <TodoList todos={todos} setTodos={setTodos}/>
    {todos.map((t) =>
      <li>{t.todo}</li>
    )}
  </div>
}