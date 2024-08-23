import { useState, useEffect } from 'react';

import { DiaryEntry } from './types';
import { getAllEntries } from './diaryService';
import DiaryEntries from './DiaryEntries';

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  return <DiaryEntries entries={entries} />;
};

export default App;
