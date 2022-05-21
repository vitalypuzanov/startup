import React from 'react';
import classes from '../EmptyRepos/EmptyRepos.module.css';
import { AiFillCloseSquare } from 'react-icons/ai';

const EmptyRepos = () => {
  return (
    <div className={classes.wrap}>
      <AiFillCloseSquare size={50} color={'#808080'}></AiFillCloseSquare>
      <p className={classes.text}>Repository list is Empty</p>
    </div>
  );
};

export default EmptyRepos;
