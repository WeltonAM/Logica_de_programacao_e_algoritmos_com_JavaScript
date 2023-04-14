import MenuSuperior from '@/components/MenuSuperior'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MenuSuperior />
      <Component {...pageProps} />
    </>
  )
}
