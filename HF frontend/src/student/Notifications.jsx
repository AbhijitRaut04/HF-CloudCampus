import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Replace this mock data with API call
    const mockNotifications = [
      {
        _id: 1,
        title: 'Important Notice: Hostel Closure',
        description: 'All students must vacate hostel premises by 6 PM on Friday.',
        notifiedTo: 'All Students',
        from: {
          name: 'Dr. Sharma',
        },
        fromModel: 'FacultyAuthority',
        createdAt: new Date().toISOString()
      },
      {
        _id: 2,
        title: 'Blood Donation Camp',
        description: 'Join us for the blood donation camp at Auditorium AB2.',
        notifiedTo: '3rd Year CSE',
        from: {
          name: 'Jayesh Kadam',
        },
        fromModel: 'StudentAuthority',
        createdAt: new Date().toISOString()
      }
    ];

    setNotifications(mockNotifications);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔔 Notifications</h2>
      {notifications.length === 0 ? (
        <p style={styles.empty}>No notifications available.</p>
      ) : (
        notifications.map((notif) => (
          <div key={notif._id} style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.title}>{notif.title}</h3>
              <span style={styles.badge}>{notif.notifiedTo}</span>
            </div>
            <p style={styles.description}>{notif.description}</p>
            <div style={styles.footer}>
              <span style={styles.from}>From: <strong>{notif.from.name}</strong> ({notif.fromModel})</span>
              <span style={styles.time}>{new Date(notif.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    width: '100%',
    fontFamily: 'Segoe UI, sans-serif',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '26px',
    color: '#333',
    marginBottom: '20px',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease-in-out',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    fontSize: '20px',
    margin: 0,
    color: '#2c3e50',
  },
  badge: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '600',
  },
  description: {
    fontSize: '15px',
    color: '#444',
    margin: '10px 0',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    color: '#777',
    marginTop: '12px',
  },
  from: {
    fontStyle: 'italic',
  },
  time: {
    fontStyle: 'italic',
  },
};

export default Notifications;
