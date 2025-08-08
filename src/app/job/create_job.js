// components/JobForm.js
import { useState } from 'react';

export default function JobForm() {
  const [formData, setFormData] = useState({
    job_id: '',
    job_name: '',
    job_description: '',
    qualification: '',
    email: '',
    job_type: '',
    company_name: '',
    location: '',
    salary: '',
    last_date: '',
  });
  async function getData() {
  const url = "http://192.168.20.83:5000/postjoblisting";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    setJob(json);
  } catch (error) {
    // console.error(error.message);
  }
}

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newJobListings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.text();
      alert(result === 'success' ? 'Job posted successfully!' : 'Failed to post job');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold' }}>{key.replace(/_/g, ' ').toUpperCase()}</label>
          <input
            type={key === 'email' ? 'email' : key === 'last_date' ? 'date' : 'text'}
            name={key}
            value={value}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
      ))}
      <button type="submit" style={{ padding: '10px 20px', fontWeight: 'bold' }}>Post Job</button>
    </form>
  );
}