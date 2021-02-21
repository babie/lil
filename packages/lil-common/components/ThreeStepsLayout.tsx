import { useEffect } from 'react'
import css from 'styled-jsx/css'
import { SiteBar } from './SiteBar'
import { PageBar } from './PageBar'
import { Content } from './Content'

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
  .three-steps-layout {
    display: grid;
    @media (orientation: landscape) {
      grid-template:
        'sitebar container pagebar' 100vh
        / 48px auto 48px;
    }
    @media (orientation: portrait) {
      grid-template:
        'sitebar' 48px
        'container' auto
        'pagebar' 48px
        / 100vw;
    }
    height: 100vh;
  }
`

export const ThreeStepsLayout: React.FC = ({ children }) => {
  useViewportPropertyUpdate()
  return (
    <>
      <div className="three-steps-layout">
        <SiteBar />
        <Content>{children}</Content>
        <PageBar />
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
