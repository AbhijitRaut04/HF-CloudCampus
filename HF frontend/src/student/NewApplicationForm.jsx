import React, { useState } from 'react';

const NewApplicationForm = ({ setApplications, setShowForm }) => {
  const [form, setForm] = useState({
    from: '',
    title: '',
    body: '',
    file: '',
    priority: 'high',
    to: [
      { authority: 'HOD', status: 'pending' },
      { authority: 'Dean', status: 'pending' },
      { authority: 'Principal', status: 'pending' }
    ]
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApp = {
      ...form,
      _id: Date.now(),
      createdAt: new Date()
    };
    setApplications((prev) => [...prev, newApp]);
    setShowForm(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f7f9fc',
    color: '#111',
    fontSize: '14px',
    outlineColor: '#2196f3'
  };

  return (
    <div style={{
      position: 'fixed',
      top: '10%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
      width: '420px',
      zIndex: 1000,
      border: '2px solid #2196f3'
    }}>
      <h2 style={{
        color: '#ff6f00',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        📝 New Application
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="From"
          value={form.from}
          onChange={(e) => handleChange('from', e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => handleChange('title', e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Body"
          value={form.body}
          onChange={(e) => handleChange('body', e.target.value)}
          style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
        />
        <input
          placeholder="File URL (optional)"
          value={form.file}
          onChange={(e) => handleChange('file', e.target.value)}
          style={inputStyle}
        />
        <select
          value={form.priority}
          onChange={(e) => handleChange('priority', e.target.value)}
          style={{ ...inputStyle, cursor: 'pointer' }}
        >
          <option value="high">High 🔥</option>
          <option value="medium">Medium ⚠️</option>
          <option value="low">Low ✅</option>
        </select>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#2196f3',
              color: '#fff',
              padding: '10px 16px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1976d2')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2196f3')}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '10px 16px',
              border: '2px solid #ff6f00',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ffe8d6')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewApplicationForm;
