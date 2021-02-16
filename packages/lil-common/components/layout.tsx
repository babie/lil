import { useEffect } from 'react'
import css from 'styled-jsx/css'
import { SiteMenu } from './SiteMenu'
import { PageMenu } from './PageMenu'
import { Container } from './Container'

const setViewportProperty = () => {
  let prevClientHeight: number
  const doc = document.documentElement
  const handleResize = () => {
    const clientHeight = doc.clientHeight
    /*
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    */
    if (clientHeight === prevClientHeight) return
    requestAnimationFrame(() => {
      doc.style.setProperty('--vh', clientHeight * 0.01 + 'px')
      prevClientHeight = clientHeight
    })
  }
  handleResize()
}

const useViewportPropertyUpdate = () => {
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change height from the state object after 300 milliseconds
      timeoutId = setTimeout(setViewportProperty, 300)
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener)
    }
  }, [])
}

const styles = css`
  .layout {
    display: grid;
    @media (orientation: landscape) {
      grid-template:
        'header container footer' 100vh
        / 48px auto 48px;
    }
    @media (orientation: portrait) {
      grid-template:
        'header' 48px
        'container' auto
        'footer' 48px
        / 100vw;
    }
    height: 100vh;
  }
`

export const Layout: React.FC = ({ children }) => {
  useViewportPropertyUpdate()
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
