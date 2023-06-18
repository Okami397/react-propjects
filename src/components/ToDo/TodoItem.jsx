import React from 'react'
import Check from './Check'
import './Todo.css'
import MyButton from '../UI/button/MyButton'


const TodoItem = (props) => {
  return (
    <div className='item'>
          <div className='item__box'>
            <Check /> 
            {props.post.title}
          </div>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
    </div>
  )
}

export default TodoItem