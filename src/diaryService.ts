import axios from 'axios';
import { DiaryEntry, NewEntry } from './types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllEntries = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then((response) => response.data);
};

export const createEntry = async (object: NewEntry): Promise<DiaryEntry> => {
  try {
    const response = await axios.post<DiaryEntry>(baseUrl, object);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data;
      throw new Error(`${error.status}: ${errorMessage}`);
    } else {
      console.error(error);
    }
    throw new Error('Failed to create entry');
  }
};
