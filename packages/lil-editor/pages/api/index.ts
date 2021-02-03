import { NextApiRequest, NextApiResponse } from 'next'
import corsProxy from '@isomorphic-git/cors-proxy/middleware.js'

const options = {
  origin: process.env['LIL_PROXY_ALLOW_ORIGIN'],
  insecure_origins: (process.env['LIL_PROXY_INSECURE_ORIGINS'] || '').split(
    ','
  ),
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const newReq: NextApiRequest = { ...req } as NextApiRequest
  newReq.url = req.url.replace('/api', '')
  return corsProxy(options)(newReq, res)
}

export default handler
