import { useState, useEffect } from 'react'
import HomeSVG from 'remixicon/icons/Buildings/home-2-line.svg'
import FileAddSVG from 'remixicon/icons/Document/file-add-line.svg'
import FileEditSVG from 'remixicon/icons/Document/file-edit-line.svg'

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
        <nav className="sitemenu">
          <ul>
            <li>
              <HomeSVG className="sitemenu-icon" />
            </li>
          </ul>
        </nav>
        <div className="container" style={{ height }}>
          {children}
        </div>
        <div className="pagemenu">
          <ul>
            <li>
              <FileAddSVG className="pagemenu-icon" />
            </li>
            <li>
              <FileEditSVG className="pagemenu-icon" />
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .layout {
          --bar-weight: 48px;
        }

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

        .sitemenu {
          position: fixed;
          background-color: var(--theme-color);
          ul {
            display: flex;
            flex-wrap: wrap;
            align-content: space-around;
            justify-content: space-around;
          }

          @media (orientation: landscape) {
            top: 0;
            left: 0;
            height: 100%;
            ul {
              width: var(--bar-weight);
              height: 100%;
            }
          }

          @media (orientation: portrait) {
            top: 0;
            width: 100%;
            ul {
              height: var(--bar-weight);
            }
          }
        }

        .pagemenu {
          position: fixed;
          background-color: transparent;
          ul {
            display: flex;
            flex-wrap: wrap;
            align-content: space-around;
            justify-content: space-around;
          }

          @media (orientation: landscape) {
            top: 0;
            right: 0;
            height: 100%;
            ul {
              width: var(--bar-weight);
              height: 100%;
            }
          }

          @media (orientation: portrait) {
            bottom: 0;
            width: 100%;
            ul {
              height: var(--bar-weight);
            }
          }
        }
      `}</style>
    </>
  )
}
