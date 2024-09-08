import React from 'react';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Left side with padding and border radius */}
      <div className="w-1/2 bg-gray-800" style={{ padding: '10% 0', borderRadius: '20px' }}></div>
      
      {/* Right side with padding, border radius, and separator line */}
      <div className="w-1/2 p-8 space-y-8" style={{ borderRadius: '20px', padding: '4%' }}>
        {/* Separator line */}
        <div className="border-b border-gray-600 mb-4"></div>
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
