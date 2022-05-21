import React from 'react';
import classes from '../Info/Info.module.css';
import { IoMdPerson, IoMdPeople } from 'react-icons/io';

const Info = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      <img src={data.data.avatar_url} alt="" className={classes.img}></img>
      <h3>{data.data.name}</h3>
      <a href={data.data.html_url} className={classes.link}>
        {data.data.login}
      </a>

      <div className={classes.follows}>
        <div className={classes.followers}>
          <IoMdPerson color="#191C1F" className={classes.icon}></IoMdPerson> followers {data.data.followers}
        </div>
        <div className={classes.folowing}>
          <IoMdPeople color="#191C1F" className={classes.icon}></IoMdPeople> folowing {data.data.following}
        </div>
      </div>
    </div>
  );
};

export default Info;
