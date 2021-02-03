import { NextApiRequest, NextApiResponse } from 'next'
import corsProxy from '@isomorphic-git/cors-proxy/middleware.js'

const options = {
  origin: process.env['LIL_PROXY_ALLOW_ORIGIN'],
  insecure_origins: (process.env['LIL_PROXY_INSECURE_ORIGINS'] || '').split(
    ','
  ),
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  req.url = req.url.replace('/api', '')
  return corsProxy(options)(req, res)
}

export default handler
