import axios from './axiosInstance';

export const getCheatingRecords = (studentId) =>
  axios.get(`/cheating-records/student/${studentId}`);

export const reportCheatingIncident = (data) =>
  axios.post('/cheating-records/report', data);
