import {
  json,
  useLoaderData,
  useActionData,
  useCatch,
  Link,
  Form,
  redirect,
} from 'remix'
import {useParams} from 'react-router-dom'
import {jokes} from '../../jokes'

function validateJokeContent(content) {
  if (content?.length < 4) return `That joke is too short`
}

function validateJokeName(name) {
  if (name?.length < 2) return `That joke's name is too short`
}

export const action = async ({request}) => {
  const requestText = await request.text()
  const form = new URLSearchParams(requestText)
  const joke = {
    id: Math.random().toString(32).slice(2),
    content: form.get('content'),
    name: form.get('name'),
  }
  const errors = {
    content: validateJokeContent(joke.content),
    name: validateJokeName(joke.name),
  }
  if (Object.values(errors).some(Boolean)) return {errors, joke}

  jokes.unshift(joke)
  return redirect(`/jokes/${joke.id}`)
}

export default function JokeScreen() {
  const data = useLoaderData()
  const actionData = useActionData()
  const [formValues, setFormValues] = React.useState(
    actionData?.joke ?? {
      name: '',
      content: '',
    },
  )
  const nameError = validateJokeName(formValues.name)
  const contentError = validateJokeContent(formValues.content)
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <Form
        method="post"
        onChange={e =>
          setFormValues({
            name: e.currentTarget.elements.name.value,
            content: e.currentTarget.elements.content.value,
          })
        }
      >
        <div>
          <label>
            Name: <input defaultValue={formValues.name} name="name" />
          </label>
          {nameError ? <div role="alert">{nameError}</div> : null}
        </div>
        <div>
          <label>
            Content:{' '}
            <textarea defaultValue={formValues.content} name="content" />
          </label>
          {contentError ? <div role="alert">{contentError}</div> : null}
        </div>
        <button type="submit">Add</button>
      </Form>
    </div>
  )
}
