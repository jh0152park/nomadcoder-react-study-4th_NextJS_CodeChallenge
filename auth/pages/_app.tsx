import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div
            className={`w-full min-h-screen flex justify-center items-center ${inter.className} bg-[#008080]`}
        >
            <Component {...pageProps} />
        </div>
    );
}
