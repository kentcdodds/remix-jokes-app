import aboutCss from '../styles/about.css'

export const links = () => {
  return [{rel: 'stylesheet', href: aboutCss}]
}

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>What a great page!</p>
    </div>
  )
}
