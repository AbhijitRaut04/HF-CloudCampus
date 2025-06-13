import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dean from './dashboards/DeanDashboard';
import Director from './dashboards/DirectorDashboard';
import Doctor from './dashboards/DoctorDashboard';
import Faculty from './dashboards/FacultyDashboard';
import Admin from './dashboards/AdminDashboard';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import StudentDashboard from './dashboards/StudentDashboard';
import Elections from './student/Elections';
import CheatingRecords from './student/CheatingRecords';
import Applications from './student/Applications';
import Profile from './student/Profile';
import Notices from './student/Notices';
import HODDashboard from './dashboards/HODDashboard';
import HODElections from './hod/Elections';
import HODCheatingRecords from './hod/CheatingRecords';
import HODApplications from './hod/Applications';
import HODProfile from './hod/Profile';
import DeanDashboard from './dashboards/DeanDashboard';
import DirectorDashboard from './dashboards/DirectorDashboard';
import DoctorDashboard from './dashboards/DoctorDashboard';
import FacultyDashboard from './dashboards/FacultyDashboard';
import AdminDashboard from './dashboards/AdminDashboard';


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

        <Route path="/hod" element={<HODDashboard />} >
          <Route path="elections" element={<HODElections />} />
          <Route path="cheating-records" element={<HODCheatingRecords />} />
          <Route path="applications" element={<HODApplications />} />
          <Route path="profile" element={<HODProfile />} />
        </Route>

        <Route path="/dean" element={<DeanDashboard />} >
          <Route path="elections" element={<Elections />} />
          <Route path="cheating-records" element={<CheatingRecords />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/director" element={<DirectorDashboard />} >
          <Route path="elections" element={<Elections />} />
          <Route path="cheating-records" element={<CheatingRecords />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/doctor" element={<DoctorDashboard />} >
          <Route path="elections" element={<Elections />} />
          <Route path="cheating-records" element={<CheatingRecords />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/faculty" element={<FacultyDashboard />} >
          <Route path="elections" element={<Elections />} />
          <Route path="cheating-records" element={<CheatingRecords />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />} >
          <Route path="elections" element={<Elections />} />
          <Route path="cheating-records" element={<CheatingRecords />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<Profile />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
