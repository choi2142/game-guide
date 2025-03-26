// pages/_app.tsx

import RootLayout from "../layouts/RootLayout"; // RootLayout 임포트
import "../styles/global.css"; // 글로벌 CSS 스타일 임포트

function MyApp({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
  return (
    <RootLayout>
      <Component {...pageProps} /> {/* Component는 index.tsx에 해당하는 페이지 컴포넌트를 의미 */}
    </RootLayout>
  );
}

export default MyApp;
