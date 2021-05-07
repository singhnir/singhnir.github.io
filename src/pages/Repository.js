import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Repository/Cell';
import data from '../data/repository';

const Repository = () => (
  <Main
    title="Repository"
    description="Learn about Nirmal Singh's repository."
  >
    <article className="post" id="repository">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/repository">Repositories</Link></h2>
          <p>These are my favourite repos but you are more welcome to check out the others.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      <ul className="actions" style={{ display: 'flex', justifyContent: 'center' }}>
        <li>
          <Link to={{ pathname: 'https://github.com/singhnir?tab=repositories' }} target="_blank" className="button">All Repositories</Link>
        </li>
      </ul>
    </article>
  </Main>
);

export default Repository;
