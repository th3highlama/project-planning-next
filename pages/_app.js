import '../styles/globals.css'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
