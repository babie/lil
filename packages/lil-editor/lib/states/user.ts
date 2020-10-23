import { atom } from 'recoil'

export type User = {
  login: string
  name: string
  email: string
  bio: string
  avatar_url: string
  token: string
}

export const currentUserState = atom<User>({
  key: 'currentUserState',
  default: null,
})
