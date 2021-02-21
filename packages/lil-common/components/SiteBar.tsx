import css from 'styled-jsx/css'
import HomeSVG from 'remixicon/icons/Buildings/home-2-line.svg'

const styles = css`
  .site-bar {
    background-color: var(--theme-color);
    ul {
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: space-around;
    }
  }

  @media (orientation: landscape) {
    .site-bar > ul {
      height: 100vh;
      width: var(--bar-weight);
    }
  }

  @media (orientation: portrait) {
    .site-bar > ul {
      width: 100vw;
      height: var(--bar-weight);
    }
  }
  :global(.site-bar-item) {
    fill: var(--base-color);
    width: 48px;
    height: 48px;
    padding: 6px;
  }
`
export const SiteBar: React.FC = () => {
  return (
    <>
      <nav className="site-bar">
        <ul>
          <li>
            <HomeSVG className="site-bar-item" />
          </li>
        </ul>
      </nav>
      <style jsx>{styles}</style>
    </>
  )
}
