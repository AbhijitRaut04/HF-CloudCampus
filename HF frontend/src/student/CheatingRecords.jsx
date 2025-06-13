import React from 'react';

const CheatingRecords = () => {
  const records = [
    {
      _id: "1",
      student: { _id: "s1", name: "Aniket Deshmukh", roll: "CS23-101" },
      title: "Unauthorized Notes Found",
      description: "Student was found using handwritten notes during exam.",
      proof: [
        "https://via.placeholder.com/150?text=Proof+1",
        "https://via.placeholder.com/150?text=Proof+2"
      ],
      caughtBy: { _id: "f1", name: "Prof. Meena Kulkarni" },
      createdAt: "2025-06-12T12:15:00Z"
    },
    {
      _id: "2",
      student: { _id: "s2", name: "Riya Patil", roll: "CS23-107" },
      title: "Phone Usage During Test",
      description: "Caught using a mobile phone to access answers.",
      proof: ["https://via.placeholder.com/150?text=Mobile+Proof"],
      caughtBy: null,
      createdAt: "2025-06-11T09:30:00Z"
    }
  ];

  const styles = {
    container: {
      width: '100%',
      padding: '20px',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box'
    },
    recordCard: {
      border: '2px solid #ffa500',
      borderRadius: '8px',
      backgroundColor: '#fff',
      padding: '15px',
      marginBottom: '20px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#000'
    },
    subTitle: {
      color: '#555',
      fontSize: '14px',
      marginBottom: '5px'
    },
    desc: {
      color: '#333',
      fontSize: '15px',
      margin: '10px 0'
    },
    proofContainer: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginTop: '10px'
    },
    proofImg: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      border: '1px solid #87ceeb',
      borderRadius: '6px'
    },
    footer: {
      marginTop: '12px',
      fontSize: '13px',
      color: '#666'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', color: '#000' }}>📋 Cheating Records</h2>
      {records.map((record) => (
        <div key={record._id} style={styles.recordCard}>
          <div style={styles.title}>{record.title}</div>
          <div style={styles.subTitle}>
            Student: {record.student?.name} ({record.student?.roll})
          </div>
          <div style={styles.desc}>{record.description}</div>

          <div style={styles.proofContainer}>
            {record.proof.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Proof ${index + 1}`}
                style={styles.proofImg}
              />
            ))}
          </div>

          <div style={styles.footer}>
            Caught By: {record.caughtBy?.name || 'Not specified'}<br />
            Date: {new Date(record.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheatingRecords;
