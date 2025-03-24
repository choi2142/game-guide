// pages/index.js
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import { guides } from '../data/guides';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}  
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">장기 공략 목록</h1>
        
        {/* Tabs */}
        <Tabs />

        {/* Game Guides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold mb-4">{guide.title}</h2>
              <p className="text-gray-700">{guide.content}</p>
              <Link href={`/guides/${guide.id}`}>
                <a className="text-blue-500 mt-4 block">자세히 보기</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
