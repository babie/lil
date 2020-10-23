import { atom } from 'recoil'

type User = null | {
  login: string
  name: string
  email: string
  bio: string
  avatar_url: string
}

export const currentUserState = atom<User>({
  key: 'currentUserState',
  default: null,
})
