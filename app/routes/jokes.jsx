import {Outlet, useLoaderData, Link} from 'remix'
import {jokes} from '../jokes'

export const loader = () => {
  const jokeIds = jokes.map(j => ({id: j.id, name: j.name})).slice(0, 5)
  return {jokeIds}
}

export default function JokesScreen() {
  const data = useLoaderData()
  return (
    <div>
      <h1>Jokes!</h1>
      <Outlet />
      <p>Here are a few more jokes to check out</p>
      <ul>
        {data.jokeIds.map(({id, name}) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Link to="new">Add your own</Link>
    </div>
  )
}
