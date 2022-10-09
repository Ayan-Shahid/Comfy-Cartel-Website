import "styles/Global";
import type { AppProps } from "next/app";
import Theme from "../theme/Theme";
import GlobalStyles from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<Component {...pageProps} />
			<GlobalStyles />
		</Theme>
	);
}

export default MyApp;
