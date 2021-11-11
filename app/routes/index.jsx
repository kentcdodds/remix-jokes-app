import {json, useLoaderData} from 'remix'

export const loader = async () => {
  return json({time: new Date()})
}

export default function IndexScreen() {
  const {time} = useLoaderData()
  return (
    <div>
      <h1>Welcome home!</h1>
      <p>Not much to see here.</p>
      <p>But this page was rendered at {time}.</p>
    </div>
  )
}
