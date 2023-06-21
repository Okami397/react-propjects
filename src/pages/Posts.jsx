import React, { useState, useEffect } from "react";
// import './styles/index.css';
import '../styles/index.css'
import PostList from "../components/ToDo/PostList";
import PostForm from "../components/ToDo/PostForm";
import PostFilter from "../components/ToDo/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import { getPagesCount, getPagesArray} from "../utils/pages"
import Pagination from "../components/UI/pagination/Pagination";

function Posts () {
    const [posts, setPost] = useState( [] )

const [filter, setFilter] = useState({sort: '', query:''})
const [modal, setModal] = useState(false);
const [isPostLoading, setIsPostLoading] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)


const createPost = (newPost) => {
    setPost([...posts, newPost])
    setModal(false)
} 

useEffect( () => {
    fetchPosts()
}, [page])

const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id))
}

const searchPosts = usePosts(posts, filter.sort, filter.query)

async function fetchPosts() {
    setIsPostLoading(true)
    const responce = await PostService.getAll(limit, page);
    setPost(responce.data)
    setIsPostLoading(false)
    const totalCount = responce.headers[`x-total-count`]
    setTotalPages(getPagesCount(totalCount, limit))
}

const changePage = (page) => {
    setPage(page)
}

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
             {isPostLoading 
                ?  <MyLoader></MyLoader>
                :  <div>
                        {searchPosts.length !== 0 
                        ?   <PostList remove={removePost} posts={searchPosts} title="Список задач"/>
                        :   <h1 style={{textAlign: 'center'}}>Список пуст</h1>
                        }
                        <Pagination 
                            page={page} 
                            changePage={changePage}
                            totalPages={totalPages}
                        />
                    </div>}
         </div>
    )
}

export default Posts;