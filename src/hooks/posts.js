import { createContext, useContext, useState } from 'react'
import swal from 'sweetalert'

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
    swal('Pronto!', 'Post criado com sucesso!', 'success')
  }

  async function DeletePost(postId) {
    swal({
      title: 'Você tem certeza?',
      text: 'Tem certeza que deseja deletar esse post?',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        await api.delete(`posts/${postId}`)
        swal('Post apagado com sucesso!', {
          icon: 'success'
        })
      }
    })
  }

  return (
    <PostsContext.Provider
      value={{ posts, loading, fetchPosts, AddPost, DeletePost }}
    >
      {children}
    </PostsContext.Provider>
  )
}

function usePosts() {
  const context = useContext(PostsContext)
  return context
}

export { PostsProvider, usePosts }
