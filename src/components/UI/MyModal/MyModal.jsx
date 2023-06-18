import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

  const rootClasses = [classes.myModal];

  if(visible){
    rootClasses.push(classes.myModal__active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div className={classes.myModal__content} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default MyModal