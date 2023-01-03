import type { AppProps } from 'next/app';
import { State } from '../Context/Allcontext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <State>
      <Component {...pageProps} />
    </State>
  );
}
