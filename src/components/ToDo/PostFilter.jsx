import React from 'react'
import MyInput from '../UI/input/MyInput'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div style={{marginRight: '50px'}}>
     <MyInput 
      value={filter.query}
      onChange={e => setFilter({...filter, query: e.target.value})}
      placeholder='Поиск'
      />
    </div>
  )
}

export default PostFilter