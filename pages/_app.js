import { ProvideAuth } from '../lib/auth';
import { ProvideCubes } from '../lib/cubes';
import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import { Global, css } from '@emotion/react';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={customTheme}>
			<ProvideAuth>
				<ProvideCubes>
					<CSSReset />
					<Global
						styles={css`
							html {
								min-width: 360px;
								scroll-behavior: smooth;
							}

							#__next {
								display: flex;
								flex-direction: column;
								min-height: 100vh;
							}
						`}
					/>
					<Component {...pageProps} />
				</ProvideCubes>
			</ProvideAuth>
		</ThemeProvider>
	);
}

export default MyApp;
