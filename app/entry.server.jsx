import ReactDOMServer from 'react-dom/server'
import {RemixServer} from 'remix'

function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  const markup = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  )

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html',
    },
  })
}

export default handleRequest
