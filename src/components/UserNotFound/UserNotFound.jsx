import React from 'react';
import classes from '../UserNotFound/UserNotFound.module.css';
import { AiOutlineUser } from 'react-icons/ai';

const UserNotFound = () => {
  return (
    <div className={classes.wrap}>
      <AiOutlineUser size={50} color={'#808080'}></AiOutlineUser>
      <p className={classes.text}>User not Found</p>
    </div>
  );
};

export default UserNotFound;
