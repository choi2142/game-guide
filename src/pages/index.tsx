import Link from 'next/link';
import { guides } from '../data/guides';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">게임 공략 목록</h1>
      <div className="space-y-4">
        {guides.map(guide => (
          <div key={guide.id} className="bg-white p-4 rounded shadow-md">
            {/* Link 컴포넌트로 상세 페이지로 이동 */}
            <Link href={`/post/${guide.id}`}>
              <a className="text-2xl font-semibold hover:text-blue-500">
                {guide.title}
              </a>
            </Link>
            <p className="text-gray-700">{guide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
