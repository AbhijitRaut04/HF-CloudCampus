import axios from './axiosInstance';

export const getHealthLeaves = (studentId) =>
  axios.get(`/health-leave/student/${studentId}`);

export const applyHealthLeave = (leaveData) =>
  axios.post('/health-leave/apply', leaveData);
