import 'modern-css-reset'
import 'lil-common/global.css'
import { RecoilRoot } from 'recoil'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
