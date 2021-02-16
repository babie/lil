import css from 'styled-jsx/css'
import FileAddSVG from 'remixicon/icons/Document/file-add-line.svg'
import FileEditSVG from 'remixicon/icons/Document/file-edit-line.svg'

const styles = css`
  .page-menu {
    background-color: transparent;
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
  }

  :global(.page-menu-icon) {
    fill: var(--base-color);
    width: 42px;
    height: 42px;
    padding: 6px;
    background-color: var(--accent-color);
    border-radius: 50%;
  }
`

export const PageMenu: React.FC = () => {
  return (
    <>
      <div className="page-menu">
        <ul>
          <li>
            <FileAddSVG className="page-menu-icon" />
          </li>
          <li>
            <FileEditSVG className="page-menu-icon" />
          </li>
        </ul>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
