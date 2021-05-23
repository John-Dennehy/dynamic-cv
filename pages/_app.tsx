import { AnimatePresence } from 'framer-motion'
import '../styles/globals.scss'

function MyApp({ Component, pageProps, router }: any) {
  return (
      < AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
  )
}

export default MyApp
