import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import './Todo.css'

const Check = (isCompleted) => {
  return (
    <button className='checked'>
        {isCompleted && 
        <BsCheckLg />
        }
    </button>
  )
}

export default Check