import React, { useState } from "react";
import PaginationBar from "./components/PaginationBar";
import PaginationSettings from "./components/PaginationSettings";

import "./App.scss";

function App() {
  const [pagesCount, setPagesCount] = useState(7);
  const [offset, setOffset] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = value => {
    setCurrentPage(value);
  };

  const handleOffsetChange = value => {
    setOffset(value);
  };

  const handlePagesCount = value => {
    setPagesCount(value);
  };

  return (
    <main className="main-content">
      <PaginationSettings
        getPagesCount={handlePagesCount}
        getOffset={handleOffsetChange}
      />
      <PaginationBar
        pagesCount={pagesCount}
        offset={offset}
        currentPage={currentPage}
        getPageChange={handlePageChange}
      />
    </main>
  );
}

export default App;
