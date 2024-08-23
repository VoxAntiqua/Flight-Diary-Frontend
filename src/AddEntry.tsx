import { useState } from 'react';
import { AddEntryProps, NewEntry } from './types';

const AddEntry = (props: AddEntryProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newEntry: NewEntry = {
      date,
      visibility,
      weather,
      comment,
    };
    props.addNewEntry(newEntry);
    setDate('');
    setVisibility('');
    setWeather('');
    setComment('');
  };

  return (
    <div>
      <h2>Add new entry</h2>
      <form onSubmit={onSubmit}>
        <div>
          date:{' '}
          <input
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          visibility:{' '}
          <input
            name="visibility"
            value={visibility}
            onChange={(event) => setVisibility(event.target.value)}
          />
        </div>
        <div>
          weather:{' '}
          <input
            name="weather"
            value={weather}
            onChange={(event) => setWeather(event.target.value)}
          />
        </div>
        <div>
          comment:{' '}
          <input
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddEntry;
