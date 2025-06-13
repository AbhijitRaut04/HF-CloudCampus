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
    approved: '#4caf50',
    rejected: '#f44336',
    pending: '#2196f3'
  };

  const renderStepProgress = (steps) => (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div style={{
            padding: '6px 10px',
            borderRadius: '20px',
            backgroundColor: statusColor[step.status],
            color: '#fff',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            {step.authority}
          </div>
          {idx < steps.length - 1 && (
            <span style={{
              margin: '0 8px',
              color: '#2196f3',
              fontWeight: 'bold'
            }}>→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>📄 Applications</h2>
        <button
          style={{
            backgroundColor: '#ffa500',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
          onClick={() => setShowForm(true)}
        >
          ➕ New Application
        </button>
      </div>

      {applications.map((app) => (
        <div key={app._id} style={{
          border: '2px solid #ccc',
          borderRadius: '10px',
          padding: '16px',
          marginTop: '20px',
          backgroundColor: '#fdfdfd'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{app.title}</strong>
            <span style={{
              backgroundColor: badgeColor[app.priority],
              padding: '4px 8px',
              borderRadius: '4px',
              color: '#fff'
            }}>{app.priority.toUpperCase()}</span>
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
