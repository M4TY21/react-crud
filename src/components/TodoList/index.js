import { Container, PostsGrid, Post } from './styles'

import { Button } from '@mui/material'

export function TodoList() {
  return (
    <Container>
      <Button variant="contained">Add Post</Button>
      <PostsGrid>
        <Post />
      </PostsGrid>
    </Container>
  )
}
