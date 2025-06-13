import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import StudentDashboard from './dashboards/StudentDashboard';
import Elections from './student/Elections';
import CheatingRecords from './student/CheatingRecords';
import Applications from './student/Applications';
import Profile from './student/Profile';
import Notifications from './student/Notifications';

import HODDashboard from './dashboards/HODDashboard';
import HODElections from './hod/Elections';
import HODApplications from './hod/Applications';
import HODProfile from './hod/Profile';

import DeanDashboard from './dashboards/DeanDashboard';
import DeanElections from './dean/Elections';
import DeanApplications from './dean/Applications';
import DeanProfile from './dean/Profile';

import DirectorDashboard from './dashboards/DirectorDashboard';
import DirectorElections from './director/Elections';
import DirectorApplications from './director/Applications';
import DirectorProfile from './director/Profile';

import DoctorDashboard from './dashboards/DoctorDashboard';
import DoctorApplications from './doctor/Applications';
import DoctorProfile from './doctor/Profile';

import FacultyDashboard from './dashboards/FacultyDashboard';
import FacultyElections from './faculty/Elections';
import FacultyCheatingRecords from './faculty/CheatingRecords';
import FacultyApplications from './faculty/Applications';
import FacultyProfile from './faculty/Profile';

import AdminDashboard from './dashboards/AdminDashboard';
import AdminElections from './admin/Elections';
import AdminApplications from './admin/Applications';
import AdminProfile from './admin/Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/' element={<Home />} >

          <Route path="student" element={<StudentDashboard />}>
            <Route path="elections" element={<Elections />} />
            <Route path="cheating-records" element={<CheatingRecords />} />
            <Route path="applications" element={<Applications />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>

          <Route path="hod" element={<HODDashboard />} >
            <Route path="elections" element={<HODElections />} />
            <Route path="cheating-records" element={<CheatingRecords />} />
            <Route path="applications" element={<HODApplications />} />
            <Route path="profile" element={<HODProfile />} />
          </Route>

          <Route path="dean" element={<DeanDashboard />} >
            <Route path="elections" element={<DeanElections />} />
            <Route path="cheating-records" element={<CheatingRecords />} />
            <Route path="applications" element={<DeanApplications />} />
            <Route path="profile" element={<DeanProfile />} />
          </Route>

          <Route path="director" element={<DirectorDashboard />} >
            <Route path="elections" element={<DirectorElections />} />
            <Route path="cheating-records" element={<CheatingRecords />} />
            <Route path="applications" element={<DirectorApplications />} />
            <Route path="profile" element={<DirectorProfile />} />
          </Route>

          <Route path="doctor" element={<DoctorDashboard />} >
            <Route path="applications" element={<DoctorApplications />} />
            <Route path="profile" element={<DoctorProfile />} />
          </Route>

          <Route path="faculty" element={<FacultyDashboard />} >
            <Route path="elections" element={<FacultyElections />} />
            <Route path="cheating-records" element={<FacultyCheatingRecords />} />
            <Route path="applications" element={<FacultyApplications />} />
            <Route path="profile" element={<FacultyProfile />} />
          </Route>

          <Route path="admin" element={<AdminDashboard />} >
            <Route path="elections" element={<AdminElections />} />
            <Route path="cheating-records" element={<CheatingRecords />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="profile" element={<AdminProfile />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
