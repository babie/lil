import { Octokit } from '@octokit/core'
import { kvsIndexedDB } from '@kvs/indexeddb'
import { User } from './states'

export const fetchUser = async (token: string): Promise<User> => {
  const octokit = new Octokit({ auth: token })
  const { data } = await octokit.request('GET /user')
  const { login, name, email, bio, avatar_url } = data
  return {
    login,
    name,
    email,
    bio,
    avatar_url,
    token,
  }
}

export type AuthorizationStorageSchema = {
  currentUser: User
}

export const getAuthorizationStorage = async () => {
  const storage = await kvsIndexedDB<AuthorizationStorageSchema>({
    name: 'authorization',
    version: 1,
  })
  return storage
}

export const saveCurrentUser = async (user: User) => {
  const storage = await getAuthorizationStorage()
  await storage.set('currentUser', user)
}

export const loadCurrentUser = async () => {
  const storage = await getAuthorizationStorage()
  return await storage.get('currentUser')
}

export const clearCurrentUser = async () => {
  const storage = await getAuthorizationStorage()
  await storage.clear()
}
