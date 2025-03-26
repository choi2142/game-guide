// layouts/RootLayout.tsx

import { SectionProvider } from "../contexts/SectionContext"; // SectionContext 임포트
import Header from "../components/Header"; // Header 임포트
import "../styles/global.css"; // 글로벌 스타일 임포트

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SectionProvider>
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <main className="main-content">
            {children} {/* Home 컴포넌트가 렌더링될 부분 */}
          </main>
        </div>
      </div>
    </SectionProvider>
  );
}
