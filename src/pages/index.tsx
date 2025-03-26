// pages/index.tsx

import { useSection } from "../contexts/SectionContext"; // SectionContext 임포트

export default function Home() {
  const { sectionData } = useSection(); // SectionContext로부터 데이터 가져오기

  return (
    <div className="home-container">
      <h2 className="heading-large">{sectionData.title}</h2> {}
      <p>{sectionData.content}</p>
    </div>
  );
}
