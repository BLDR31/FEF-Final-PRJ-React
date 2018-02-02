import React from 'react';

const Navbar = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <a href="/">Home | </a>
    <a href="/app">Search | </a>
    <a href="/mine">Mine</a>
  </div>
);

export default Navbar;
