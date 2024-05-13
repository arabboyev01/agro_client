import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { Fragment, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { withProvider } from '@/Providers'

import '../main.css'
import 'react-toastify/dist/ReactToastify.css'
import '../core-ui.css'
import '../login.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const queryClient = new QueryClient()

 function App({ Component, pageProps }: AppProps) {
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
  );
}
export default withProvider(App)