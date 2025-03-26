// pages/index.tsx

import { useSection } from "../contexts/SectionContext"; // SectionContext 임포트

export default function Home() {
  const { sectionData } = useSection(); // SectionContext로부터 데이터 가져오기

  return (
    <div className="home-container">
      <h2 className="text-2xl font-bold mt-10">{sectionData.title}</h2> {/* mt-10으로 margin-top 추가 */}
      <p>{sectionData.content}</p>
    </div>
  );
}
