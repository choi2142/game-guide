// components/Tabs.js
import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('rules');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 ${activeTab === 'rules' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded hover:bg-blue-600`}
          onClick={() => handleTabChange('rules')}
        >
          장기 규칙
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'beginner' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded hover:bg-blue-600`}
          onClick={() => handleTabChange('beginner')}
        >
          초보자 가이드
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'advanced' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded hover:bg-blue-600`}
          onClick={() => handleTabChange('advanced')}
        >
          고급 전략
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'how-to-play' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded hover:bg-blue-600`}
          onClick={() => handleTabChange('how-to-play')}
        >
          게임 방법
        </button>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <div className="space-y-4">
        {activeTab === 'rules' && <div>장기 규칙에 대한 설명이 여기에 들어갑니다...</div>}
        {activeTab === 'beginner' && <div>초보자 가이드가 여기에 들어갑니다...</div>}
        {activeTab === 'advanced' && <div>고급 전략이 여기에 들어갑니다...</div>}
        {activeTab === 'how-to-play' && <div>게임 방법에 대한 설명이 여기에 들어갑니다...</div>}
      </div>
    </div>
  );
}
