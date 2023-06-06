import { ThemeProvider, CssBaseline } from '@mui/material';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme } from '../themes'
import { SWRConfig } from 'swr'
import { UIProvider } from '../context';



function MyApp({ Component, pageProps }: AppProps) {
  return (


    <SWRConfig
      value={{
        refreshInterval: 500,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <UIProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>

    </SWRConfig>

  )
}

export default MyApp
