import { Link, Outlet } from 'react-router-dom';

function DirectorDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <nav style={styles.sidebar}>
        <h3>Director Panel</h3>
        <Link to="elections" style={styles.link}>Elections</Link>
        <Link to="cheating-records" style={styles.link}>Cheating Records</Link>
        <Link to="applications" style={styles.link}>Director Applications</Link>
        <Link to="profile" style={styles.link}>Profile</Link>
      </nav>
      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '220px',
    height: '100vh',
    backgroundColor: '#f1f1f1',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '16px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default DirectorDashboard;
