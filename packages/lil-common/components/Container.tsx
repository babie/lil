import css from 'styled-jsx/css'

const styles = css`
  .container {
    background-color: var(--base-color);
    overflow-y: hidden;
    @media (orientation: landscape) {
    }
    @media (orientation: portrait) {
    }
  }
`

export const Container: React.FC = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{styles}</style>
    </>
  )
}
