import css from 'styled-jsx/css'
import HomeSVG from 'remixicon/icons/Buildings/home-2-line.svg'

const styles = css`
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
`
export const SiteMenu: React.FC = () => {
  return (
    <>
      <nav className="sitemenu">
        <ul>
          <li>
            <HomeSVG className="sitemenu-icon" />
          </li>
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  )
}
