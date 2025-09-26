import axios from 'axios';
const BASE_URL = "http://localhost:4000/api"; // Use your computer IP if running on mobile

export async function getBus(busNo) {
  const res = await axios.get(`${BASE_URL}/bus/${busNo}`);
  return res.data;
}
export async function postBus(data) {
  const res = await axios.post(`${BASE_URL}/bus`, data);
  return res.data;
}
export async function updateNextStop(busNo, nextStop) {
  const res = await axios.patch(`${BASE_URL}/bus/${busNo}/next-stop`, { nextStop });
  return res.data;
}
