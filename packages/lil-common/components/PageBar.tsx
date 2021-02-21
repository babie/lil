import css from 'styled-jsx/css'
import FileAddSVG from 'remixicon/icons/Document/file-add-line.svg'
import FileEditSVG from 'remixicon/icons/Document/file-edit-line.svg'

const styles = css`
  .page-bar {
    background-color: transparent;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: space-around;
    }
  }

  @media (orientation: landscape) {
    .page-bar > ul {
      height: 100vh;
      width: var(--bar-weight);
    }
  }

  @media (orientation: portrait) {
    .page-bar > ul {
      width: 100vw;
      height: var(--bar-weight);
    }
  }

  :global(.page-bar-item) {
    fill: var(--base-color);
    width: 42px;
    height: 42px;
    padding: 6px;
    background-color: var(--accent-color);
    border-radius: 50%;
  }
`

export const PageBar: React.FC = () => {
  return (
    <>
      <div className="page-bar">
        <ul>
          <li>
            <FileAddSVG className="page-bar-item" />
          </li>
          <li>
            <FileEditSVG className="page-bar-item" />
          </li>
        </ul>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
