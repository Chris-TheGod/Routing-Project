import axios from 'axios'

const UserList = () => {
  return <h1>UserList</h1>
}

function loader({ request: { signal } }) {
  return axios
    .get('http://localhost:3000/users', { signal })
    .then((res) => res.data)
}

export const userListRoute = {
  loader,
  element: <UserList />,
}
