// pages/test.tsx
import Head from "next/head";

const TestPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind CSS Test</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Tailwind CSS Test</h1>
          <p className="mt-4 text-lg text-gray-700">
            Tailwind CSS가 제대로 적용되었는지 확인하세요.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            클릭하세요
          </button>
        </div>
      </div>
    </>
  );
};

export default TestPage;
