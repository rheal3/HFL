import React, { Fragment } from 'react';
import './App.css';

// COMPONENTS //
import CreateEntry from './components/CreateEntry';
import ListEntries from './components/ListEntries'

function App() {
  return (
    <Fragment>
      <div className="container">
        <CreateEntry />
        <ListEntries />
      </div>
    </Fragment>
  );
}

export default App;
