import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nirmal Singh's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome नमस्ते !</Link></h2>
          <p>
            “Do or do not. There is no try.” - Master Yoda.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/repository">repositories</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <section className="blurb">
        <ul className="actions">
          <li><a href="nirmalsingh-CV.pdf" className="button" download>Download CV</a></li>
        </ul>
      </section>
      <p> Source-code available <a href="https://github.com/singhnir/singhnir.github.io">here</a>.</p>
      <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">This is a link and you should definitely click it.</a></p>
    </article>
  </Main>
);

export default Index;
