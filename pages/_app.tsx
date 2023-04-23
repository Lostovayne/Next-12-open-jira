import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { DarkTheme } from '../themes'
import { UIProvider } from '../context/ui'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UIProvider>
			<ThemeProvider theme={DarkTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</UIProvider>
	)
}

export default MyApp
