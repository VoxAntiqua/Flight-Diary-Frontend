import { useState, useEffect } from 'react';

import { DiaryEntry } from './types';
import { getAllEntries } from './diaryService';
import DiaryEntries from './DiaryEntries';
import AddEntry from './AddEntry';

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log('form submitted!');
  };

  return (
    <>
      <AddEntry onSubmit={onSubmit} />
      <DiaryEntries entries={entries} />
    </>
  );
};

export default App;
