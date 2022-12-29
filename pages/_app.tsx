import "../styles/globals.css"

import { Header } from "../components/header/header.component"
import { Footer } from "../components/footer/footer.component"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />

            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </>
    )
}
