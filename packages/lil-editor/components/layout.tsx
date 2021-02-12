import styles from '../styles/layout.module.css'
import HomeSVG from 'remixicon/icons/Buildings/home-2-line.svg'
import FileAddSVG from 'remixicon/icons/Document/file-add-line.svg'
import FileEditSVG from 'remixicon/icons/Document/file-edit-line.svg'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.sitemenu}>
        <ul>
          <li>
            <HomeSVG className={styles.sitemenu_icon} />
          </li>
        </ul>
      </nav>
      <div className={styles.container}>{children}</div>
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
