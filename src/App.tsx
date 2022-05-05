import React from 'react';
import personalInfo from './data/personal-info.json';
import './App.css';

function App() {
  return (
    <div>
      <h2 className="name">{personalInfo.firstName}</h2>
      <h2 className="name">{personalInfo.lastName}</h2>
      <p className='city'>{personalInfo.city}</p>

      {personalInfo.hobbies.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </div>
  );
}

export default App;

