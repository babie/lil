import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '../../lib/states/user'

export const Tree = () => {
  const router = useRouter()
  const currentUser = useRecoilValue(currentUserState)

  if (process.browser) {
    //console.dir(currentUser)
    if (currentUser === null) {
      router.push('/')
    }
  }

  return <div>Tree, user: {currentUser.login}</div>
}

export default Tree
