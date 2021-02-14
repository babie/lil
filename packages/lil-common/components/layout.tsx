import { useState, useEffect } from 'react'
import { SiteMenu } from './SiteMenu'
import { PageMenu } from './PageMenu'

const getHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

const useCurrentHeight = () => {
  // save current window height in the state object
  const [height, setHeight] = useState(getHeight())

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change height from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setHeight(getHeight()), 150)
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return height
}

export const Layout: React.FC = ({ children }) => {
  let height: string | number = '100vh'
  if (process.browser) {
    height = useCurrentHeight()
  }

  return (
    <>
      <div className="layout">
        <SiteMenu />
        <div className="container" style={{ height }}>
          {children}
        </div>
        <PageMenu />
      </div>
      <style jsx>{`
        .container {
          background-color: var(--base-color);
          @media (orientation: landscape) {
            margin-left: var(--bar-weight);
            margin-right: var(--bar-weight);
          }

          @media (orientation: portrait) {
            width: 100%;
            padding-top: var(--bar-weight);
            padding-bottom: var(--bar-weight);
          }
        }
      `}</style>
    </>
  )
}
