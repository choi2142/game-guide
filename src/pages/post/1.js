import { useRouter } from 'next/router';
import { guides } from '../../data/guides';  // 예시로 로컬 데이터 사용

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;  // URL에서 ID 추출

  // 해당 ID에 맞는 게임 공략 글 찾기
  const guide = guides.find(guide => guide.id.toString() === id);

  if (!guide) {
    return <p>공략 글을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">{guide.title}</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p className="text-gray-700">{guide.content}</p>
      </div>
    </div>
  );
}
