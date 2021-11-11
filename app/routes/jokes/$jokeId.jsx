import {json, useLoaderData, useCatch, Link, Form, redirect} from 'remix'
import {useParams} from 'react-router-dom'
import {jokes} from '../../jokes'

export const loader = ({params}) => {
  const joke = jokes.find(j => j.id === params.jokeId)
  if (!joke) {
    throw new Response('', {status: 404})
  }
  return json({joke})
}

export const action = ({request, params}) => {
  if (request.method === 'DELETE') {
    jokes.splice(
      jokes.findIndex(j => j.id === params.jokeId),
      1,
    )
    return redirect('/jokes')
  }
}

export default function JokeScreen() {
  const data = useLoaderData()
  return (
    <div>
      <p>Here's your hilarious joke</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name}</Link>
      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()
  if (caught.status === 404) {
    return <div>Huh? What the heck is {params.jokeId}?</div>
  }
  throw new Error(`Unhandled error: ${caught.status}`)
}
