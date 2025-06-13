import React, { useState, useEffect } from 'react';
import NewApplicationForm from './NewApplicationForm';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Replace with API call
    const mockData = [
      {
        _id: 1,
        from: 'Ravi Kumar',
        title: 'Hostel Permission Request',
        body: 'Request permission to go home for 3 days.',
        file: '',
        priority: 'high',
        to: [
          { authority: 'Warden', status: 'approved' },
          { authority: 'HOD', status: 'approved' },
          { authority: 'Principal', status: 'pending' }
        ],
        createdAt: new Date()
      },
      {
        _id: 2,
        from: 'Jayesh Kadam',
        title: 'AB4 Permission',
        body: 'Request permission to use AB4 class for 3days.',
        file: '',
        priority: 'medium',
        to: [
          { authority: 'Dean', status: 'approved' },
          { authority: 'HOD', status: 'pending' }
        ],
        createdAt: new Date()
      }
    ];
    setApplications(mockData);
  }, []);

  const badgeColor = {
    low: '#87cefa',
    medium: '#ffa500',
    high: '#ff6347'
  };

  const statusColor = {
    approved: '#4caf50',    // Green
    rejected: '#f44336',    // Red
    pending: '#ff9800'      // Orange
  };

  const renderStepProgress = (steps) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '12px',
      flexWrap: 'wrap',
    }}>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div
            title={`Status: ${step.status}`}
            style={{
              padding: '10px 16px',
              borderRadius: '30px',
              backgroundColor: statusColor[step.status] || '#90a4ae',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease-in-out',
              textAlign: 'center',
              minWidth: '100px',
              textTransform: 'uppercase',
            }}
          >
            {step.authority}
          </div>
          {idx < steps.length - 1 && (
            <span style={{
              margin: '0 10px',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#2196f3',
              userSelect: 'none'
            }}>
              →
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );


  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>📄 Applications</h2>
        <div>

          <button
            style={{
              background: 'linear-gradient(to right, #ff9800, #ff5722)',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.3s ease',
            }}
            onClick={() => setShowForm(true)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
            }}
          >
            New Application
          </button>
        </div>

      </div>

      {applications.map((app) => (
        <div key={app._id} style={{
          border: '2px solid #ccc',
          borderRadius: '10px',
          padding: '16px',
          marginTop: '20px',
          backgroundColor: '#fdfdfd'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
            padding: '8px 12px',
            backgroundColor: '#f5f7fa',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
          }}>
            <strong style={{ color: '#1a237e', fontSize: '18px' }}>
              {app.title}
            </strong>
            <span style={{
              backgroundColor: badgeColor[app.priority],
              padding: '6px 12px',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {app.priority}
            </span>
          </div>

          <p><strong>From:</strong> {app.from}</p>
          <p>{app.body}</p>
          {app.file && (
            <a href={app.file} target="_blank" rel="noreferrer">📎 View Attachment</a>
          )}

          {/* 🔷 Step Progress */}
          {renderStepProgress(app.to)}
        </div>
      ))}

      {showForm && (
        <NewApplicationForm
          setApplications={setApplications}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default Applications;
