import React from "react";

import "./PaginationUnit.scss";

const PaginationUnit = props => {
  const { number, currentPage, getPageChange } = props;
  return (
    <div
      onClick={() => getPageChange(number)}
      className={`pagination-unit ${currentPage === number ? "active" : ""}`}
    >
      {number + 1}
    </div>
  );
};

export default PaginationUnit;
