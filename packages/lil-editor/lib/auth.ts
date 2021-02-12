import { Octokit } from '@octokit/core'
import { KVSIndexedDB, kvsIndexedDB } from '@kvs/indexeddb'
import { User } from '../states'

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

export type AuthStorageSchema = {
  currentUser: User
}

export const openAuthStorage = async () => {
  const storage = await kvsIndexedDB<AuthStorageSchema>({
    name: 'auth',
    version: 1,
  })
  return storage
}

export const closeAuthStorage = async (
  storage: KVSIndexedDB<AuthStorageSchema>
) => {
  await storage.close()
}

export const saveCurrentUser = async (user: User) => {
  const storage = await openAuthStorage()
  await storage.set('currentUser', user)
  await closeAuthStorage(storage)
}

export const loadCurrentUser = async () => {
  const storage = await openAuthStorage()
  const currentUser = await storage.get('currentUser')
  await closeAuthStorage(storage)
  if (!currentUser) {
    throw new Error('currentUser is not found')
  }
  return currentUser
}

export const clearCurrentUser = async () => {
  const storage = await openAuthStorage()
  await storage.clear()
  await closeAuthStorage(storage)
}
