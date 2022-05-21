import React from 'react';
import classes from '../Initial/Initial.module.css';
import { AiOutlineSearch } from 'react-icons/ai';


const Initial = () => {
 

  return (
    <div className={classes.wrap}>
      <AiOutlineSearch size={50} color={'#808080'}></AiOutlineSearch>
      <p className={classes.text}>
        Start with searching <br /> a GitHub user
      </p>
    </div>
  );
};

export default Initial;
