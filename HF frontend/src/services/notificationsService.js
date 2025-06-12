import axios from './axiosInstance';

export const getStudentNotifications = (studentId) =>
  axios.get(`/notifications/student/${studentId}`);

export const markAsRead = (notificationId) =>
  axios.patch(`/notifications/${notificationId}/read`);
