import { useSection } from "../contexts/SectionContext"; // Context 가져오기

const Header = () => {
  const { setSelectedSection } = useSection(); // Context에서 setSelectedSection 가져오기

  return (
    <header className="header">
        <div className="header-title">
            <span className="jang">장</span><span className="gi">기</span>
        </div>
        <nav className="nav-container">
            <button className="nav-link" onClick={() => setSelectedSection("Game")}>장기 소개</button>
            <button className="nav-link" onClick={() => setSelectedSection("Rules")}>기물 소개</button>
            <button className="nav-link" onClick={() => setSelectedSection("Ranking")}>랭킹</button>
        </nav>
    </header>

  );
};

export default Header;
