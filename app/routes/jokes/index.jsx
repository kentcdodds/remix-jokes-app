import {useLoaderData, Link} from 'remix'
import {jokes} from '../../jokes'

export const loader = () => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
  return {randomJoke}
}

export default function JokesDefaultScreen() {
  const data = useLoaderData()
  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomJoke.content}</p>
      <Link to={data.randomJoke.id}>{data.randomJoke.name}</Link>
    </div>
  )
}

export function ErrorBoundary({error}) {
  console.error(error)
  return <div>I did a whoopsies.</div>
}
