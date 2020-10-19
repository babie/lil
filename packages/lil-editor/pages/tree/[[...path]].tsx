import { useRouter } from 'next/router'
import { getCookie } from '../../lib/cookie'

export const Tree = () => {
  const authorized = getCookie('authorized')
  const router = useRouter()
  let login = ''

  if (process.browser) {
    if (!authorized) {
      router.push('/')
    }
    login = getCookie('login')
  }

  return <div>Tree, user: {login}</div>
}

export default Tree
