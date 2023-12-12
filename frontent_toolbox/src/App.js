
import './App.css';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import React, { useState } from 'react'
import ListFiles from './components/ListFiles';
import AllFiles from './components/AllFiles';
import SearchFile from './components/SearchFile';
function App() {
  const [view, setView] = useState(0)
  return (
    <div className="App">
      <Navbar />
      <Navigation view={view} setView={setView} />
      {view === 0 ? <ListFiles /> : null}
      {view === 1 ? <AllFiles /> : null}
      {view === 2 ? <SearchFile /> : null}
    </div>
  );
}

export default App;
