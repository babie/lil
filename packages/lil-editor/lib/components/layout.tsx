import styles from '../styles/layout.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <ul>
          <li>Top</li>
        </ul>
      </nav>
      <div className={styles.container}>{children}</div>
      <div className={styles.toolbar}>
        <ul>
          <li>New</li>
          <li>Edit</li>
        </ul>
      </div>
    </div>
  )
}
export default Layout
