// pages/guides/[id].js
import { guides } from '../../data/guides';
import { useRouter } from 'next/router';

export default function GuideDetail() {
  const router = useRouter();
  const { id } = router.query;
  const guide = guides.find(g => g.id.toString() === id);

  if (!guide) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{guide.title}</h1>
      <p className="text-gray-700">{guide.content}</p>
    </div>
  );
}
