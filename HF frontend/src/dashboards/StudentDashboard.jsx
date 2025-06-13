import { Link, Outlet, useLocation } from 'react-router-dom';

function StudentDashboard() {
  const location = useLocation();

  return (
    <div style={styles.container}>
      <nav style={styles.sidebar}>
        <h2 style={styles.title}>🎓 Student Panel</h2>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            style={{
              ...styles.link,
              backgroundColor: location.pathname.includes(path) ? '#e3f2fd' : 'transparent',
              color: location.pathname.includes(path) ? '#0d47a1' : styles.link.color,
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

const navLinks = [
  { path: 'elections', label: '🗳 Elections' },
  { path: 'cheating-records', label: '⚠️ Cheating Records' },
  { path: 'applications', label: '📄 Student Applications' },
  { path: 'profile', label: '👤 Profile' },
  { path: 'notifications', label: '📢 Notifications' },
];

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#fdfdfd',
  },
  sidebar: {
    width: '240px',
    backgroundColor: '#0d47a1',
    color: '#fff',
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    borderRadius: '8px',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#ff9800',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    padding: '10px 14px',
    borderRadius: '8px',
    transition: 'all 0.2s ease-in-out',
  },
  content: {
    flex: 1,
    padding: '30px',
    backgroundColor: '#f5faff',
  },
};

export default StudentDashboard;
