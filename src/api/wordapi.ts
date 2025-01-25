import axios, { AxiosRequestConfig } from 'axios';
import { WordResponse, Word, WordEntry} from '../types';

const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem("jwt");
  return {
    headers: {
'Authorization': token,
      'Content-Type': 'application/json',
    },
  };
 };



export const getWords = async (): Promise<WordResponse[]> => {

const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/words`, getAxiosConfig());
return response.data._embedded.words;
}

export const deleteWord = async (link: string): Promise<WordResponse> =>
    {
      const response = await axios.delete(link, getAxiosConfig())
    return response.data
    }

    // Add a new car
 export const addWord = async (word: Word): Promise<WordResponse> => {

    //console.log(word)
    //console.log('API URL:', `${import.meta.env.VITE_API_URL}/words`);  // Log the full URL for debugging
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/words`, word, getAxiosConfig());
    //console.log(response.data)
    return response.data;
   }

   export const updateWord = async (wordEntry: WordEntry):
  Promise<WordResponse> => {
  const response = await axios.put(wordEntry.url, wordEntry.word, getAxiosConfig());
  return response.data;
 }