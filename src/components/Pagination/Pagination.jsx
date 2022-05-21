import React from 'react';
import classes from '../Pagination/Pagination.module.css';

const Pagination = ({ reposPerPage, totalRepos, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={classes.ul}>
        {pageNumbers.map((number) => (
          <li className={classes.li}>
            <a key={number} href="!#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
