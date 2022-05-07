import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'
import SizeObserver from '../utils/size-observer'
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SizeObserver>
      <ScrollObserver scrollY={0}>
      <Navbar/>
             <Component {...pageProps} />
      </ScrollObserver>
 </SizeObserver>
  )
}

export default MyApp
