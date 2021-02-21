import css from 'styled-jsx/css'

const styles = css`
  .content {
    background-color: var(--base-color);
    overflow-y: hidden;
    @media (orientation: landscape) {
    }
    @media (orientation: portrait) {
    }
  }
`

export const Content: React.FC = ({ children }) => {
  return (
    <>
      <div className="content">{children}</div>
      <style jsx>{styles}</style>
    </>
  )
}
