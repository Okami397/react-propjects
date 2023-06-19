import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import './Todo.css'

const Check = (isCompleted) => {
  return (
    <button className='checked'>
        {isCompleted && 
        <BsCheckLg style={{margin: '5px'}} />
        }
    </button>
  )
}

export default Check