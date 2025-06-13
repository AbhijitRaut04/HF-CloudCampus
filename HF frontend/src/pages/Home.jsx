import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        {['student', 'admin', 'doctor', 'faculty', 'hod', 'dean', 'director'].map((role) => (
          <Link key={role} to={role} style={styles.navLink}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    padding: '16px',
    backgroundColor: '#ff6f61',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '600',
    fontSize: '16px',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: 'background 0.2s ease-in-out',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fdfdfd',
  },
};

// Add hover effect
const addHoverStyle = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    a:hover {
      background-color: rgba(255,255,255,0.2);
    }
  `;
  document.head.appendChild(style);
};
addHoverStyle();

export default Home;
