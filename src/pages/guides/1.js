import { useRouter } from 'next/router';
import { guides } from '../../data/guides';

export default function GuideDetail() {
  const router = useRouter();
  const { id } = router.query;

  const guide = guides.find(guide => guide.id === parseInt(id));

  if (!guide) {
    return <p>공략을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">{guide.title}</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p className="text-lg">{guide.content}</p>
      </div>
    </div>
  );
}
