import axios from 'axios';

const BASE_URL = 'https://your-backend.example.com/api'; // Replace with your backend URL

export type BusResponse = {
  id?: string;
  routeName?: string;
  destination?: string;
  stops?: string[];
  notesTranslated?: string;
};

export async function fetchBusInfo(qrData: string, lang: string = 'en'): Promise<BusResponse> {
  const url = `${BASE_URL}/bus-info`;
  const payload = { qrData, lang };

  try {
    const resp = await axios.post(url, payload, { timeout: 8000 });
    if (resp.status !== 200) throw new Error(`API Error ${resp.status}`);
    return resp.data as BusResponse;
  } catch (err) {
    throw new Error('Failed to fetch bus info: ' + err);
  }
}
