import { createContext, useContext, useState } from 'react'

import { api } from '../services/api'

const PostsContext = createContext({})

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchPosts() {
    const response = await api.get('/posts')
    setPosts(response.data.products)
    setLoading(false)
  }

  async function AddPost(newPost) {
    await api.post('/posts', newPost)
  }

  return (
    <PostsContext.Provider value={{ posts, loading, fetchPosts, AddPost }}>
      {children}
    </PostsContext.Provider>
  )
}

function usePosts() {
  const context = useContext(PostsContext)
  return context
}

export { PostsProvider, usePosts }
