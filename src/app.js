import React, { useState, useMemo } from "react";
import './styles/index.css';
import PostList from "./components/ToDo/PostList";
import PostForm from "./components/ToDo/PostForm";
import PostFilter from "./components/ToDo/PostFilter";

function App () {
    const [posts, setPost] = useState( [ 
        {   title: 'asdasd',
            isCompleted: false,
            id: '1'
        },
        {   title: 'iashdkjhask',
            isCompleted: false,
            id: '2'
        },
        {   title: 'jalskdlkalkjl',
            isCompleted: false,
            id: '3'
        }
    ] )

const [filter, setFilter] = useState({sort: '', query:''})

const createPost = (newPost) => {
    setPost([...posts, newPost])
} 

const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
}

const sortedPosts = useMemo(() => {
    if(filter.sort) {
        return [...posts].sort((a, b) => a[filter.sort].localCompare(b[filter.sort]))
    }
    return posts;
}, [filter.sort, posts])

const searchPosts = useMemo( ()=> {
    return sortedPosts.filter(post =>post.title.toLowerCase().includes(filter.query.toLowerCase()))}, 
    [filter.query, sortedPosts])

    return (
        <div>
            <PostForm create={createPost}/>
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