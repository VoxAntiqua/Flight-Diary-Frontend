import { useState, useEffect } from 'react';

import { DiaryEntry } from './types';
import { getAllEntries } from './diaryService';

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  return (
    <div>
      <h2>Diary entries</h2>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>{entry.date}</h3>
          visibility: {entry.visibility} <br />
          weather: {entry.weather} <br />
          comment: {entry.comment}
        </div>
      ))}
    </div>
  );
};

export default App;
