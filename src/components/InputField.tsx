import React, { useRef } from 'react'
import './style.css'

interface Props{
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

export const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) =>{
  const inputRef = useRef<HTMLInputElement>(null)

  return <form className='input' onSubmit={(e)=>{
      handleAdd(e)
    }}>
    <input 
      ref={inputRef}
      value={todo}
      onChange={
        (e)=>setTodo(e.target.value)
      }
      type='input' 
      placeholder='...' 
      className='input__box'></input>
    <button className='input__submit' type='submit'>
      gou
    </button>
  </form>
}