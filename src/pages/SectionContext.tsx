// contexts/SectionContext.tsx

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import data from "../data/sections.json"; // 섹션 데이터 임포트 (예: JSON 파일)

type SectionContextType = {
  selectedSection: "Game" | "Rules" | "Ranking";
  setSelectedSection: (section: "Game" | "Rules" | "Ranking") => void;
  sectionData: { title: string; content: string };
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [selectedSection, setSelectedSection] = useState<"Game" | "Rules" | "Ranking">("Game");
  const [sectionData, setSectionData] = useState<{ title: string; content: string }>({ title: "", content: "" });

  useEffect(() => {
    console.log("🔄 섹션 변경 감지:", selectedSection);
    console.log("📦 현재 데이터:", data[selectedSection]);

    if (data[selectedSection]) {
      setSectionData(data[selectedSection]);
    }
  }, [selectedSection]);

  return (
    <SectionContext.Provider value={{ selectedSection, setSelectedSection, sectionData }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return context;
}
