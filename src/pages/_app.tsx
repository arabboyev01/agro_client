import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { Fragment, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../main.css'
import 'react-toastify/dist/ReactToastify.css'
// import '@coreui/coreui/dist/css/coreui.min.css'
import '../i18configuration'
import '../core-ui.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Fragment>
  )
}