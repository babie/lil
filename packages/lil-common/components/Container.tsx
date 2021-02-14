import { useState, useEffect } from 'react'
import css from 'styled-jsx/css'

export type Rect = {
  width: number | string
  height: number | string
}

const getRect = (): Rect => {
  const w: number =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const h: number =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  if (w <= h) {
    return {
      width: `${w}px`,
      height: `calc(${h}px - calc(var(--bar-weight) * 2))`,
    }
  } else {
    return {
      width: `calc(${w}px - calc(var(--bar-weight) * 2))`,
      height: `${h}px`,
    }
  }
}

const useCurrentRect = (): Rect => {
  // save current window height in the state object
  const [rect, setRect] = useState(getRect())

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change height from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setRect(getRect()), 300)
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return rect
}

const getContainerStyles = (rect: Rect) => {
  return css.resolve`
    .container {
      width: ${rect.width};
      height: ${rect.height};
      background-color: var(--base-color);
      @media (orientation: landscape) {
        margin-left: var(--bar-weight);
        margin-right: var(--bar-weight);
      }

      @media (orientation: portrait) {
        margin-top: var(--bar-weight);
        margin-bottom: var(--bar-weight);
      }
    }
  `
}

export const Container: React.FC = ({ children }) => {
  let rect: Rect = { width: '100vw', height: '100vh' }
  if (process.browser) rect = useCurrentRect()
  const { className, styles } = getContainerStyles(rect)

  return (
    <>
      <div className={`${className} container`}>{children}</div>
      {styles}
    </>
  )
}
