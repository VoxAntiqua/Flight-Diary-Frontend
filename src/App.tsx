import { useState, useEffect } from 'react';

import { DiaryEntry, NewEntry } from './types';
import { createEntry, getAllEntries } from './diaryService';
import DiaryEntries from './DiaryEntries';
import AddEntry from './AddEntry';
import Notification from './Notification';

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

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
      if (error instanceof Error) {
        setNotification(error.message);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      }
    }
  };

  return (
    <>
      <AddEntry addNewEntry={addNewEntry} />
      <Notification message={notification} />
      <DiaryEntries entries={entries} />
    </>
  );
};

export default App;
