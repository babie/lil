import { useState, useEffect } from 'react'
import styles from '../styles/layout.module.css'
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

const Layout: React.FC = ({ children }) => {
  const height = useCurrentHeight()

  return (
    <div className={styles.layout}>
      <nav className={styles.sitemenu}>
        <ul>
          <li>
            <HomeSVG className={styles.sitemenu_icon} />
          </li>
        </ul>
      </nav>
      <div className={styles.container} style={{ height }}>
        {children}
      </div>
      <div className={styles.pagemenu}>
        <ul>
          <li>
            <FileAddSVG className={styles.pagemenu_icon} />
          </li>
          <li>
            <FileEditSVG className={styles.pagemenu_icon} />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Layout
