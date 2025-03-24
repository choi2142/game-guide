import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">게임 보드</h2>
      <p className="text-gray-700 dark:text-gray-300">
        여기에 장기 게임이 진행됩니다. 게임 규칙에 맞춰 플레이를 시작하세요.
      </p>
      {/* 여기에 실제 게임 보드나 다른 콘텐츠가 들어갑니다 */}
    </Layout>
  );
};

export default Home;
