import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="w-4/5 scale-90"> {/* Reduced size by 20% using scale */}
      <div className="flex bg-black rounded-lg overflow-hidden shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? 'bg-gray-500 text-white rounded-lg shadow-lg'
                : 'bg-black text-white'
            } flex-1 py-2 text-center font-semibold transition duration-200 ease-in-out`} 
            style={{ height: '65%' }} 
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-md">
        {activeTab === 'About Me' && (
          <div className="overflow-y-auto max-h-48">
            Hello! I'm Dave, your sales rep from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters – Emma and Bella. Both of them are just starting school so my calendar is usually blocked between 9-10 AM. This is a...
          </div>
        )}
        {activeTab === 'Experiences' && <div>Experience content...</div>}
        {activeTab === 'Recommended' && <div>Recommended content...</div>}
      </div>

      {/* Separator line between Tabs and Gallery */}
      <div className="border-b border-gray-600 my-6"></div>
    </div>
  );
};

export default Tabs;
