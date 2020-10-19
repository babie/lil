import { Octokit } from '@octokit/core'

export const getUser = async (token: string) => {
  const octokit = new Octokit({ auth: token })
  const { data } = await octokit.request('GET /user')
  return data
}
