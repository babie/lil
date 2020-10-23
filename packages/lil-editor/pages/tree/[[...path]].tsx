import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { loadCurrentUser } from '../../lib/authorization'
import { currentUserState } from '../../lib/states/user'

export const Tree = () => {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  if (process.browser) {
    if (currentUser === null) {
      loadCurrentUser()
        .then((user) => {
          setCurrentUser(user)
        })
        .catch((_reason) => {
          router.push('/')
        })
    }
  }

  return <div>Tree, user: {currentUser.login}</div>
}

export default Tree
