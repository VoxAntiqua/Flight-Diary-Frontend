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

  const addNewEntry = async (entry: NewEntry) => {
    try {
      const returnedEntry = await createEntry(entry);
      setEntries(entries.concat(returnedEntry));
    } catch (error) {
      console.error('Failed to add new entry:', error);
    }
  };

  return (
    <>
      <AddEntry addNewEntry={addNewEntry} />
      <DiaryEntries entries={entries} />
    </>
  );
};

export default App;
