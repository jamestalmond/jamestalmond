import "../styles/globals.scss"

import { Header } from "../components/header"
import { Footer } from "../components/footer"

import { useRouter } from "next/router"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const pageId = router.pathname.substring(1)

	const showHeaderAndFooter = router.pathname !== "/test-homepage"

	return (
		<>
			{showHeaderAndFooter && <Header />}

			<main id={pageId}>
				<Component {...pageProps} />
			</main>

			{showHeaderAndFooter && <Footer />}
		</>
	)
}
