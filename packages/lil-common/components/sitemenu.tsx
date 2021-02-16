import css from 'styled-jsx/css'
import HomeSVG from 'remixicon/icons/Buildings/home-2-line.svg'

const styles = css`
  .site-menu {
    background-color: var(--theme-color);
    ul {
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: space-around;
    }

    @media (orientation: landscape) {
      ul {
        height: 100vh;
        width: var(--bar-weight);
      }
    }

    @media (orientation: portrait) {
      ul {
        width: 100vw;
        height: var(--bar-weight);
      }
    }
    :global(.site-menu-icon) {
      fill: var(--base-color);
      width: 48px;
      height: 48px;
      padding: 6px;
    }
  }
`
export const SiteMenu: React.FC = () => {
  return (
    <>
      <nav className="site-menu">
        <ul>
          <li>
            <HomeSVG className="site-menu-icon" />
          </li>
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  )
}
