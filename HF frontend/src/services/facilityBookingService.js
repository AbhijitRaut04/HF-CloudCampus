import axios from './axiosInstance';

export const getBookings = (studentId) =>
  axios.get(`/facility-booking/student/${studentId}`);

export const bookFacility = (bookingData) =>
  axios.post('/facility-booking/book', bookingData);
