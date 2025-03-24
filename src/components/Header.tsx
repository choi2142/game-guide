import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white dark:bg-[#1E2028] shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">장기 게임</h1>
        <nav>
          <Link href="/" className="text-gray-800 dark:text-white mx-2">홈</Link>
          <Link href="/rules" className="text-gray-800 dark:text-white mx-2">게임 규칙</Link>
          <Link href="/profile" className="text-gray-800 dark:text-white mx-2">내 정보</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
