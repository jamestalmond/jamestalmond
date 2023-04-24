import "../styles/globals.scss"

import { Header } from "../components/header/header.component"
import { Footer } from "../components/footer/footer.component"

import { useRouter } from "next/router"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const pageId = router.pathname.substring(1)

	return (
		<>
			<Header />

			<main id={pageId}>
				<Component {...pageProps} />
			</main>

			<Footer />
		</>
	)
}
