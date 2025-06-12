import axios from './axiosInstance';

export const getStudentApplications = (studentId) =>
  axios.get(`/applications/student/${studentId}`);

export const submitApplication = (applicationData) =>
  axios.post('/applications/submit', applicationData);
