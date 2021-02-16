import css from 'styled-jsx/css'
import { SiteMenu } from './SiteMenu'
import { PageMenu } from './PageMenu'
import { Container } from './Container'

const styles = css`
  .layout {
    display: grid;
    @media (orientation: landscape) {
      grid-template:
        'header container footer' 100vh
        / 48px 1fr 48px;
      min-width: 100vw;
    }
    @media (orientation: portrait) {
      grid-template:
        'header' 48px
        'container' 1fr
        'footer' 48px
        / 100vw;
      min-height: 100vh;
    }
  }
`

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="layout">
        <SiteMenu />
        <Container>{children}</Container>
        <PageMenu />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
