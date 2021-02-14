import css from 'styled-jsx/css'
import FileAddSVG from 'remixicon/icons/Document/file-add-line.svg'
import FileEditSVG from 'remixicon/icons/Document/file-edit-line.svg'

const styles = css`
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
`

export const PageMenu: React.FC = () => {
  return (
    <>
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
      <style jsx>{styles}</style>
    </>
  )
}
