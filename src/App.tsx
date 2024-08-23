import { useState, useEffect } from 'react';

import { DiaryEntry, NewEntry } from './types';
import { createEntry, getAllEntries } from './diaryService';
import DiaryEntries from './DiaryEntries';
import AddEntry from './AddEntry';

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  const addNewEntry = (entry: NewEntry) => {
    createEntry(entry).then((newEntry) => {
      setEntries(entries.concat(newEntry));
    });
  };

  return (
    <>
      <AddEntry addNewEntry={addNewEntry} />
      <DiaryEntries entries={entries} />
    </>
  );
};

export default App;
