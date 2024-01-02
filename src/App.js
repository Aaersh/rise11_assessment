import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from "./components/Header.js";
import Numbers from './components/Numbers.js';
import FullGraph from './components/FullGraph';
import Sales from './components/Sales.js';
import Table from './components/Table.js';
import Sidebar from './components/Sidebar.js';


const App = () => {
  useEffect(() => {
    document.title = 'Rise11';
  });
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <>
      <div className={`header-container ${showSidebar ? 'shrink' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
      </div>
      {showSidebar && <Sidebar />}
      <div className={`content ${showSidebar ? 'shrink' : ''}`}>
        <Numbers />
        <FullGraph />
        <Sales/>
        <Table/>
      </div>
    </>
  )
}

export default App