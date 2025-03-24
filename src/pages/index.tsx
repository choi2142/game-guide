// pages/index.js
import { guides } from '../data/guides';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Game Guides</h2>
        <ul>
          <li>
            <Link href="#action">
              <a className="block py-2 px-4 hover:bg-gray-700">Action Guides</a>
            </Link>
          </li>
          <li>
            <Link href="#strategy">
              <a className="block py-2 px-4 hover:bg-gray-700">Strategy Guides</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">게임 공략 목록</h1>
        
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Action</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Strategy</button>
          </div>
        </div>
        
        {/* Game Guides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-4">{guide.title}</h2>
              <p className="text-gray-700">{guide.content}</p>
              <Link href={`/guides/${guide.id}`}>
                <a className="text-blue-500 mt-4 block">Read more...</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
