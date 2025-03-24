// pages/_app.tsx
import { AppProps } from 'next/app'; // AppProps를 import하여 타입을 명시합니다.
import '../styles/globals.css'; // Tailwind CSS가 포함된 globals.css 파일을 불러옵니다.

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
