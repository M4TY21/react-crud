import { TodoList } from './components/TodoList'
import { PostsProvider } from './hooks/posts'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <PostsProvider>
      <GlobalStyle />
      <TodoList />
    </PostsProvider>
  )
}

export default App
