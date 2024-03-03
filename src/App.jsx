import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Tag from './components/tag';
import './App.css';

function App() {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : { username: '', panNumber: '', file: { name: '' } };
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <>
     <Router>
      <div className="App h-[100vh]">
        <Routes>
          <Route path="/home" element={<Home username={formData.username} panNumber={formData.panNumber} fileName={formData.file.name} />} />
          <Route
            path="/"
            element={
              <LoginForm
                onSubmit={(data) => {
                  handleFormSubmit(data);
                }}
              />
            }
          />
        </Routes>
      </div>
      <Tag></Tag>
    </Router>
    </>
   

  );
}

export default App;
