import { SiteMenu } from './SiteMenu'
import { PageMenu } from './PageMenu'
import { Container } from './Container'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <SiteMenu />
      <Container>{children}</Container>
      <PageMenu />
    </div>
  )
}
