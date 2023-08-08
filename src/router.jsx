import { Navigate, createBrowserRouter } from 'react-router-dom'
import { postListRoute } from './pages/Postlist'
import { userListRoute } from './pages/UserList'
import { TodoList } from './pages/TodoList'
import { RootLayout } from './layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to='/posts' /> },
      {
        path: 'posts',
        children: [
          { index: true, ...postListRoute },
          { path: ':postId', element: <h1>Hi</h1> },
        ],
      },
      { path: 'users', ...userListRoute },
      { path: 'todos', element: <TodoList /> },
    ],
  },
])
