import React, { useState } from 'react';

const tuning = ['E', 'A', 'D', 'G', 'B', 'E']; // string 6 to 1
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const numFrets = 13;

function getNoteForStringFret(stringIndex, fretIndex) {
  const openNote = tuning[stringIndex]; // string 0 is low E
  const startIdx = notes.indexOf(openNote);
  return notes[(startIdx + fretIndex) % 12];
}

function Fretboard() {
  const [selectedNotes, setSelectedNotes] = useState([]);

  function handleNoteClick(stringIdx, fretIdx) {
    const note = getNoteForStringFret(stringIdx, fretIdx);
    const key = `${stringIdx}-${fretIdx}`;
    const alreadySelected = selectedNotes.some(n => n.key === key);

    if (alreadySelected) {
      setSelectedNotes(selectedNotes.filter(n => n.key !== key));
    } else {
      setSelectedNotes([...selectedNotes, { stringIdx, fretIdx, note, key }]);
    }
  }

  return (
    <div className="flex flex-col space-y-1 p-4">
      {tuning.map((string, stringIdx) => (
        <div key={stringIdx} className="flex space-x-1">
          {[...Array(numFrets)].map((_, fretIdx) => {
            const key = `${stringIdx}-${fretIdx}`;
            const isSelected = selectedNotes.some(n => n.key === key);
            return (
              <button
                key={fretIdx}
                className={`w-10 h-10 text-sm border rounded ${
                  isSelected ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
                onClick={() => handleNoteClick(stringIdx, fretIdx)}
              >
                {getNoteForStringFret(stringIdx, fretIdx)}
              </button>
            );
          })}
        </div>
      ))}

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Selected Notes:</h2>
        <p>{selectedNotes.map(n => n.note).join(', ') || 'None'}</p>
      </div>
    </div>
  );
}

export default Fretboard;
