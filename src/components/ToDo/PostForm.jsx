import React, {useState} from 'react'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'

const PostForm = ({create}) => {
    const [title, setTitle] = useState('')
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
           ...title,
            title,
            id: Date.now()
        }
        create(newPost)
        setTitle('')
    }

    return (
    <div>
        <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Заголовок"/> 
                <MyButton onClick={addNewPost}>Новая задача</MyButton>
            </form> 
    </div>
  )
}

export default PostForm