import axios from "axios";
const BASE_URL = "http://YOUR_IP:4000/api";

export const loginConductor = (empNo, password) =>
  axios.post(`${BASE_URL}/conductor/login`, { empNo, password }).then(res => res.data);

export const registerConductor = (data) =>
  axios.post(`${BASE_URL}/conductor/register`, data).then(res => res.data);

export const postBus = (data) =>
  axios.post(`${BASE_URL}/bus`, data).then(res => res.data);

export const updateNextStop = (busNo, nextStop) =>
  axios.patch(`${BASE_URL}/bus/${busNo}/next-stop`, { nextStop }).then(res => res.data);

export const getBus = (busNo) =>
  axios.get(`${BASE_URL}/bus/${busNo}`).then(res => res.data);
