import React from 'react'
import Check from './Check'
import './Todo.css'

const TodoItem = ({post}) => {
  return (
    <div className='item'>
          <Check /> 
          {post.title}
    </div>
  )
}

export default TodoItem