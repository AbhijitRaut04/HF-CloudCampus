import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Student from './dashboards/Student';
import HOD from './dashboards/HOD';
import Dean from './dashboards/Dean';
import Director from './dashboards/Director';
import Doctor from './dashboards/Doctor';
import Faculty from './dashboards/Faculty';
import Admin from './dashboards/Admin';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import StudentDashboard from './dashboards/StudentDashboard';
import Elections from './student/Elections';
import CheatingRecords from './student/CheatingRecords';
import Applications from './student/Applications';
import Profile from './student/Profile';
import Notices from './student/Notices';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/student" element={<StudentDashboard />}>
          <Route path="elections" element={<Elections />} />
          <Route path="cheating-records" element={<CheatingRecords />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notices" element={<Notices />} />
        </Route>

        <Route path="/hod" element={<HOD />} />
        <Route path="/dean" element={<Dean />} />
        <Route path="/director" element={<Director />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
