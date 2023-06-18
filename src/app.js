import React, { useState, useMemo } from "react";
import './styles/index.css';
import PostList from "./components/ToDo/PostList";
import PostForm from "./components/ToDo/PostForm";
import PostFilter from "./components/ToDo/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";

function App () {
    const [posts, setPost] = useState( [ 
        {   title: 'Научиться вёрстке',
            isCompleted: false,
            id: '1'
        },
        {   title: 'Выучить js',
            isCompleted: false,
            id: '2'
        },
        {   title: 'Понять React и Redux',
            isCompleted: false,
            id: '3'
        }
    ] )

const [filter, setFilter] = useState({sort: '', query:''})
const [modal, setModal] = useState(false);


const createPost = (newPost) => {
    setPost([...posts, newPost])
    setModal(false)
} 

const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
}

const searchPosts = usePosts(posts, filter.sort, filter.query)



    return (
        <div>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
            {searchPosts.length !== 0
                ?  <PostList remove={removePost} posts={searchPosts} title="Список задач"/>
                : <h1 style={{textAlign: 'center'}}>Список пуст</h1>
            }
        </div>
    )
}

export default App;