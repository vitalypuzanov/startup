import React from 'react';
import classes from '../Item/Item.module.css';

export const Item = ({ element }) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>
        <a href={element.html_url}>{element.name}</a>
      </h1>
      {element.description ? (
        <p className={classes.text}>{element.description}</p>
      ) : (
        <p className={classes.text}>Description is Empty</p>
      )}
    </div>
  );
};
