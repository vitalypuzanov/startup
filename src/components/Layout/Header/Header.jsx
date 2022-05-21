import React from 'react';
import { useState } from 'react';

import './Header.css';

import Git from './git.svg';

const Header = ({getData}) => {
  const [inputValues, setInputValues] = useState('');
  

  console.log('значение инпута', inputValues);
  return (
    <div className="header">
      <div className="wrapper">
        <img src={Git} alt="git-logo" className="logo"></img>
        <label>
          <input
            className="input"
            type="text"
            placeholder="Enter GitHub username"
            onKeyPress={(e) => e.key === 'Enter' && getData(inputValues)}
            onChange={(e) => setInputValues(e.target.value)}
            value={inputValues}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default Header;
