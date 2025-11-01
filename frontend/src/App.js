import React from 'react';
import Fretboard from './components/Fretboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Guitar Chord Finder </h1>
      <Fretboard />
    </div>
  );
}

export default App;
