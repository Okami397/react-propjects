import { useMemo } from 'react'

export const useSortedPost = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])
    
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort)

    const searchPosts = useMemo( ()=> {
        return sortedPosts.filter(post =>post.title.toLowerCase().includes(query.toLowerCase()))}, 
        [query, sortedPosts])
    return searchPosts;

}