import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, ColorSchemeProvider, ColorScheme, Global } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorSeheme] = useLocalStorage<ColorScheme>({
		key: "color-scheme",
		defaultValue: "dark",
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorSeheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				theme={{ colorScheme, primaryColor: "blue" }}
				withGlobalStyles
				withNormalizeCSS
			>
				<Global
					styles={(theme) => ({
						body: {
							backgroundColor:
								theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
							...theme.fn.fontStyles(),
							color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
							lineHeight: theme.lineHeight,
						},
						".mantine-Navbar-root": {
							backgroundColor:
								theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
						},
					})}
				/>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default MyApp;
