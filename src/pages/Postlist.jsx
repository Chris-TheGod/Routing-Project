import axios from 'axios'

const Postlist = () => {
  return <h1>Postlist</h1>
}

function loader({ request: { signal } }) {
  return axios
    .get('http://localhost:3000/posts', { signal })
    .then((res) => res.data)
}

export const postListRoute = {
  loader,
  element: <Postlist />,
}
