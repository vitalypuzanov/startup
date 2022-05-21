import React from 'react';
import EmptyRepos from '../../EmptyRepos/EmptyRepos';
import Pagination from '../../Pagination/Pagination';
import List from '../Repos/ListRep/List';
import classes from '../Repos/Repos.module.css';

const Repos = ({ data, repositories, paginate, reposPerPage, totalRepos, currentRepos }) => {
  return (
    <>
      {repositories.length > 1 ? (
        <div className={classes.wrapper}>
          <h2 className={classes.title}> Repositories ({data.data.public_repos}) </h2>
          <List data={data} repositories={repositories}></List>
          <Pagination
            paginate={paginate}
            reposPerPage={reposPerPage}
            totalRepos={totalRepos}
            currentRepos={currentRepos}
          ></Pagination>
        </div>
      ) : (
        <EmptyRepos></EmptyRepos>
      )}
    </>
  );
};

export default Repos;
