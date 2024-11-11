import React, { useRef } from "react";
import {useState, useEffect} from 'react'
import { Todo } from "../models";
import {MdEdit, MdFileDownloadDone} from 'react-icons/md'
import {FaTrash} from 'react-icons/fa'
import { TodoList } from "./TodoList";

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) =>{
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) =>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo, isDone: !todo.isDone}: todo))
  }

  const handleDelite = (id: number) =>{
    setTodos(todos.filter((todo)=> todo.id !== id))
  }
 
  const handleEdit = (e:React.FormEvent, id: number) =>{
    e.preventDefault()
    setTodos(todos.map((todo) => (
      todo.id===id?{...todo, todo:editTodo}: todo
    )))
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])



  return <form className="todos__single" onSubmit={(e)=>handleEdit(e, todo.id)}>
    { edit ? (
        <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todos__single-test"/>
      ) : todo.isDone ? (
        <s className="todos__single-text">{todo.todo}</s>
      ) : (
        <span className="todos__single-text">{todo.todo}</span>
      )
    }

    <span className="todos__single-text">
      {todo.todo}
    </span>
    <div>
      <span className="icon" onClick={()=>{
        if(!edit && !todo.isDone){
          setEdit(!edit)
        }        
      }
      }>
        <MdEdit />
      </span>
      <span className="icon" onClick={()=>{handleDelite(todo.id)}}>
        <FaTrash/>
      </span>
      <span className="icon" onClick={()=>{handleDone(todo.id)}}>
        <MdFileDownloadDone />
      </span>
    </div>
      
  </form>
}