import { useState } from 'react';
import { AddEntryProps, NewEntry, Visibility, Weather } from './types';

const AddEntry = (props: AddEntryProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newEntry: NewEntry = {
      date,
      visibility: visibility as Visibility,
      weather: weather as Weather,
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
            type="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          visibility: great
          <input
            type="radio"
            name="visibility"
            value="great"
            checked={visibility === 'great'}
            onChange={() => setVisibility('great')}
          />{' '}
          good
          <input
            type="radio"
            name="visibility"
            value="good"
            checked={visibility === 'good'}
            onChange={() => setVisibility('good')}
          />{' '}
          ok
          <input
            type="radio"
            name="visibility"
            value="ok"
            checked={visibility === 'ok'}
            onChange={() => setVisibility('ok')}
          />{' '}
          poor
          <input
            type="radio"
            name="visibility"
            value="poor"
            checked={visibility === 'poor'}
            onChange={() => setVisibility('poor')}
          />
        </div>
        <div>
          weather: sunny
          <input
            type="radio"
            name="weather"
            value="sunny"
            checked={weather === 'sunny'}
            onChange={() => setWeather('sunny')}
          />{' '}
          rainy
          <input
            type="radio"
            name="weather"
            value="rainy"
            checked={weather === 'rainy'}
            onChange={() => setWeather('rainy')}
          />{' '}
          cloudy
          <input
            type="radio"
            name="weather"
            value="cloudy"
            checked={weather === 'cloudy'}
            onChange={() => setWeather('cloudy')}
          />{' '}
          stormy
          <input
            type="radio"
            name="weather"
            value="stormy"
            checked={weather === 'stormy'}
            onChange={() => setWeather('stormy')}
          />{' '}
          windy
          <input
            type="radio"
            name="weather"
            value="windy"
            checked={weather === 'windy'}
            onChange={() => setWeather('windy')}
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
