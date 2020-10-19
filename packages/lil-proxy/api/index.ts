import express from 'express'
import corsProxy from '@isomorphic-git/cors-proxy/middleware.js'

const app = express()
const options = {
  origin: process.env['LIL_PROXY_ALLOW_ORIGIN'],
  insecure_origins: (process.env['LIL_PROXY_INSECURE_ORIGINS'] || '').split(
    ','
  ),
}
app.get('/', (_req, res) => {
  res.setHeader('content-type', 'text/html')
  const html = `<!DOCTYPE html>
    <html>
      <title>@isomorphic-git/cors-proxy</title>
      <h1>@isomorphic-git/cors-proxy</h1>
      <p>This is the server software that runs on <a href="https://cors.isomorphic-git.org">https://cors.isomorphic-git.org</a>
         &ndash; a free service (generously sponsored by <a href="https://www.clever-cloud.com/?utm_source=ref&utm_medium=link&utm_campaign=isomorphic-git">Clever Cloud</a>)
         for users of <a href="https://isomorphic-git.org">isomorphic-git</a> that enables cloning and pushing repos in the browser.</p>
      <p>The source code is hosted on Github at <a href="https://github.com/isomorphic-git/cors-proxy">https://github.com/isomorphic-git/cors-proxy</a></p>
      <p>It can also be installed from npm with <code>npm install <a href="https://npmjs.org/package/${'@isomorphic-git/cors-proxy'}">@isomorphic-git/cors-proxy</a></code></p>
      <h2>Terms of Use</h2>
      <p><b>This free service is provided to you AS IS with no guarantees.
      By using this free service, you promise not to use excessive amounts of bandwidth.
      </b></p>
      <p><b>If you are cloning or pushing large amounts of data your IP address may be banned.
      Please run your own instance of the software if you need to make heavy use this service.</b></p>
      <h2>Allowed Origins</h2>
      This proxy allows git clone / fetch / push / getRemoteInfo requests from these domains: <code>${
        process.env.LIL_PROXY_ALLOW_ORIGIN || '*'
      }</code>
    </html>
    `
  return res.status(200).send(html)
})

app.use(corsProxy(options))

module.exports = app