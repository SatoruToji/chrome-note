import React from 'react'
import {Todo} from '../models'
import './style.css' 
import { SingleTodo } from './SingleTodos'

interface Props{
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const  TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return <div className='todos'>
    {todos.map(todo=>(
      <SingleTodo 
        todo={todo} 
        key={todo.id} 
        todos={todos}
        setTodos={setTodos}
        />
    ))}
  </div>
}