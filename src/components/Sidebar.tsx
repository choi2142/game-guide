const Sidebar = () => {
    return (
      <aside className="w-64 h-screen bg-white dark:bg-[#15161A] shadow-md p-4">
        <nav>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-[#1E2028]">홈</a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-[#1E2028]">게임 규칙</a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-[#1E2028]">내 정보</a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-[#1E2028]">설정</a>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  