// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">장기 공략</h2>
      <ul>
        <li>
          <Link href="#rules">
            <a className="block py-2 px-4 hover:bg-gray-700">장기 규칙</a>
          </Link>
        </li>
        <li>
          <Link href="#beginner">
            <a className="block py-2 px-4 hover:bg-gray-700">초보자 가이드</a>
          </Link>
        </li>
        <li>
          <Link href="#advanced">
            <a className="block py-2 px-4 hover:bg-gray-700">고급 전략</a>
          </Link>
        </li>
        <li>
          <Link href="#how-to-play">
            <a className="block py-2 px-4 hover:bg-gray-700">게임 방법</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
