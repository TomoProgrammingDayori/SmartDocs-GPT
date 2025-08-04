import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Global app wrapper
  return <Component {...pageProps} />;
}