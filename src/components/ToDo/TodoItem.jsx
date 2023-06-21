import React from 'react'
import Check from './Check'
import './Todo.css'
import MyButton from '../UI/button/MyButton'
 import { useNavigate } from 'react-router-dom'

const TodoItem = (props) => {
  const router = useNavigate()

  return (
    <div className='item'>
          <div className='item__box'>
            <Check /> 
            {props.post.title}
          </div>
          <div className='item__buttons'>
            <MyButton onClick={ ()=> router( `/posts/${props.post.id}`)}>Открыть</MyButton>
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
          </div>
          
    </div>
  )
}

export default TodoItem