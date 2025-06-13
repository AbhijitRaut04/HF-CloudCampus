import React, { useState, useEffect } from 'react';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
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
        body: 'Request permission to use AB4 class for 3 days.',
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
    high: 'red'
  };

  const statusColor = {
    approved: 'green',
    rejected: 'red',
    pending: '#ff9800'
  };

  const handleApprove = (appId) => {
    alert(`Application ${appId} approved ✅`);
    // Call backend API here
  };
  const handleReject = (appId) => {
    alert(`Application ${appId} rejected `);
    // Call backend API here
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
              color: '#2196f3'
            }}>→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <h2>📄 Applications</h2>

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
            <strong style={{ color: '#1a237e', fontSize: '18px' }}>{app.title}</strong>
            <span style={{
              backgroundColor: badgeColor[app.priority],
              padding: '6px 12px',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>{app.priority}</span>
          </div>

          <p><strong>From:</strong> {app.from}</p>
          <p>{app.body}</p>
          {app.file && <a href={app.file} target="_blank" rel="noreferrer">📎 View Attachment</a>}

          {renderStepProgress(app.to)}

          <div style={{ marginTop: '14px', display: 'flex', gap: '12px' }}>
            <button
              onClick={() => { setSelectedApp(app); setShowModal(true); }}
              style={{
                backgroundColor: '#2196f3',
                color: '#fff',
                padding: '8px 14px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              🔍 View Application
            </button>

            <button
              onClick={() => handleApprove(app._id)}
              style={{
                backgroundColor: 'green',
                color: '#fff',
                padding: '8px 14px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              ✅ Approve
            </button>
            <button
              onClick={() => handleReject(app._id)}
              style={{
                backgroundColor: 'red',
                color: '#fff',
                padding: '8px 14px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
               ✖ Reject
            </button>
          </div>
        </div>
      ))}

      {/* Modal for Application View */}
      {showModal && selectedApp && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '30px',
            width: '500px',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ color: '#ff6f00' }}>{selectedApp.title}</h3>
            <p><strong>From:</strong> {selectedApp.from}</p>
            <p><strong>Body:</strong> {selectedApp.body}</p>
            <p><strong>Priority:</strong> {selectedApp.priority}</p>
            {selectedApp.file && <a href={selectedApp.file} target="_blank" rel="noreferrer">📎 View File</a>}
            <div style={{ marginTop: '16px' }}>
              {renderStepProgress(selectedApp.to)}
            </div>

            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: '20px',
                backgroundColor: '#f44336',
                color: '#fff',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
