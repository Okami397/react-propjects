import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import styles from './Todo.css'

const Check = (isCompleted) => {
  return (
    <div className='checked'>
        {isCompleted && 
        <BsCheckLg />
        }
    </div>
  )
}

export default Check