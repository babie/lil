import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import { loadCurrentUser } from '../../lib/auth'
import { currentUserState } from '../../lib/states/user'

export const Tree = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  useEffect(() => {
    if (process.browser) {
      if (!currentUser) {
        const f = async () => {
          const user = await loadCurrentUser()
          setCurrentUser(user)
        }

        f().catch((_reason) => {
          //console.dir(_reason)
        })
      }
    }
  }, [currentUser, setCurrentUser])

  if (!currentUser) {
    return (
      <div>
        You are not logined.
        <Link href="/">Back to Top</Link>
      </div>
    )
  }
  return <div>Tree, user: {currentUser.login}</div>
}

export default Tree
