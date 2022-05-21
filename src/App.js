import './App.css';
import UserNotFound from './components/UserNotFound/UserNotFound';
import Initial from './components/Initial/Initial';
import Header from './components/Layout/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [repositories, setRepositories] = useState([';jgsa', 'asdasd']);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(4);

  async function getData(value = 'teiza') {
    try {
      setLoading(false);
      await axios.get(`https://api.github.com/users/${value}`).then((response) => setData(response));
      await axios.get(`https://api.github.com/users/${value}/repos`).then((response) => setRepositories(response.data));
      setError(false);
      setLoading(true);
    } catch (error) {
      setLoading(false);
      setData(null);
      setError(true);

     
    }
  }

  const lastReporsIndex = currentPage * reposPerPage;
  const firstReposIndex = lastReporsIndex - reposPerPage;
  const currentRepos = repositories.slice(firstReposIndex, lastReporsIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Header getData={getData} data={data}></Header>

      {!error && !data ? <Initial></Initial> : <></>}
      {data ? (
        <>
          <Main
            data={data}
            repositories={currentRepos}
            reposPerPage={reposPerPage}
            totalRepos={repositories.length}
            currentRepos={currentRepos}
            loading={loading}
            paginate={paginate}
          ></Main>{' '}
        </>
      ) : (
        <> </>
      )}
      {error ? <UserNotFound></UserNotFound> : <></>}
    </div>
  );
}

export default App;
