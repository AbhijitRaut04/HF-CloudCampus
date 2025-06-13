import React from 'react';

const Profile = () => {
  const student = {
    registrationNo: 'Faculty123',
    name: 'J. P. Sir',
    profilePhoto: '',
    idPhoto: '',
    blockchainAddress: '0x3...xyz',
    email: 'jp@example.com',
    password: 'hidden',
    department: 'CSE',
    year: 3,
    phone: '9876543210',
    dob: '2002-10-15',
    bloodGroup: 'B+',
    address: '123, Pune, Maharashtra'
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#2196f3',
    marginRight: '8px',
    width: '140px',
    display: 'inline-block'
  };

  const valueStyle = {
    color: '#000',
    flex: 1
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    maxWidth: '700px',
    margin: '40px auto',
    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    fontFamily: 'Arial, sans-serif',
    border: '2px solid #2196f3',
    position: 'relative'
  };

  const profilePhotoContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    marginTop: '-80px'
  };

  const profilePhotoStyle = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #ff6f00',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)'
  };

  const idCardContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  };

  const idPhotoStyle = {
    width: '130px',
    height: '90px',
    borderRadius: '8px',
    objectFit: 'cover',
    border: '2px solid #2196f3'
  };

  return (
    <div style={cardStyle}>
      <div style={profilePhotoContainer}>
        <img
          src={student.profilePhoto || 'https://via.placeholder.com/140?text=Profile'}
          alt="Profile"
          style={profilePhotoStyle}
        />
      </div>

      <h2 style={{
        color: '#ff6f00',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        🎓 {student.name}
      </h2>

      <div style={idCardContainer}>
        <div style={{ textAlign: 'center' }}>
          <img
            src={student.idPhoto || 'https://via.placeholder.com/130x90?text=ID+Card'}
            alt="ID"
            style={idPhotoStyle}
          />
          <p style={{ color: '#555', marginTop: '8px' }}>ID Card</p>
        </div>
      </div>

      <div>
        <div style={rowStyle}>
          <span style={labelStyle}>Reg. No.:</span>
          <span style={valueStyle}>{student.registrationNo}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Email:</span>
          <span style={valueStyle}>{student.email}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Phone:</span>
          <span style={valueStyle}>{student.phone || 'N/A'}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>DOB:</span>
          <span style={valueStyle}>{student.dob || 'N/A'}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Blood Group:</span>
          <span style={valueStyle}>{student.bloodGroup || 'N/A'}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Department:</span>
          <span style={valueStyle}>{student.department}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Year:</span>
          <span style={valueStyle}>{student.year}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Address:</span>
          <span style={valueStyle}>{student.address || 'N/A'}</span>
        </div>
        <div style={rowStyle}>
          <span style={labelStyle}>Blockchain Address:</span>
          <span style={valueStyle}>{student.blockchainAddress || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
