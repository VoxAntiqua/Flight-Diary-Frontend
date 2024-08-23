import { DiaryEntriesProps } from './types';

const DiaryEntries = (props: DiaryEntriesProps) => {
  return (
    <div>
      <h2>Diary entries</h2>
      {props.entries.map((entry) => (
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

export default DiaryEntries;
