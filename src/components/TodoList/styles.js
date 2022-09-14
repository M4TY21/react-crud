import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;

  height: 100vh;

  background: #0e1647;
`

export const PostsGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0 2rem;
  gap: 1rem;

  width: 100%;

  overflow-y: scrollbar;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`

export const Post = styled.div`
  width: 200px;
  height: 50px;

  background: red;
`
