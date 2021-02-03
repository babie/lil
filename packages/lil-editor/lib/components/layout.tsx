import styles from '../styles/layout.module.css'
import HomeSVG from 'remixicon/icons/Buildings/home-2-line.svg'
import FileAdd from 'remixicon/icons/Document/file-add-line.svg'
import FileEdit from 'remixicon/icons/Document/file-edit-line.svg'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.sitemenu}>
        <ul>
          <li>
            <HomeSVG style={{ fill: 'white' }} />
          </li>
        </ul>
      </nav>
      <div className={styles.container}>{children}</div>
      <div className={styles.pagemenu}>
        <ul>
          <li>
            <FileAdd style={{ fill: 'white' }} />
          </li>
          <li>
            <FileEdit style={{ fill: 'white' }} />
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Layout
