import { createBrowserRouter } from 'react-router-dom'
import { Postlist } from './pages/Postlist'
import { UserList } from './pages/UserList'
import { TodoList } from './pages/TodoList'
import { RootLayout } from './layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'posts', element: <Postlist /> },
      { path: 'users', element: <UserList /> },
      { path: 'todos', element: <TodoList /> },
    ],
  },
])
