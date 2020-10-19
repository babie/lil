import { Octokit } from '@octokit/core'

export const getUser = async (token: string) => {
  const octokit = new Octokit({ auth: token })
  const { data } = await octokit.request('GET /user')
  return {
    login: data.login,
    name: data.name,
    email: data.email,
    bio: data.bio,
    avatar_url: data.avatar_url,
    token: token,
  }
}
