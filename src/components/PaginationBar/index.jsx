import React, { useState, useEffect } from "react";
import PaginationUnit from "../PaginaitionUnit";

import "./PaginationBar.scss";

const PaginationBar = props => {
  const { pagesCount, offset, currentPage, getPageChange } = props;
  const [pages, setPages] = useState(null);

  useEffect(() => {
    const visiblePagesNumber = offset * 2 + 1;
    const pageNumbers = [...Array(pagesCount).keys()];
    const startOffsetPosition = currentPage - offset;
    const endOffsetPosition = currentPage + offset;
    const lastIndex = pageNumbers.length;
    let start, end;

    if (pageNumbers === visiblePagesNumber) {
      setPages(pageNumbers);
    } else if (startOffsetPosition < 0) {
      start = 0;
      end = visiblePagesNumber;

      setPages(pageNumbers.slice(start, end));
    } else if (endOffsetPosition > lastIndex) {
      start = lastIndex - visiblePagesNumber;
      end = lastIndex;

      setPages(pageNumbers.slice(start, end));
    } else {
      const additionalPage = currentPage === lastIndex - offset ? 1 : 0;
      const extraPages =
        lastIndex - (currentPage + offset) < 0
          ? lastIndex - (currentPage + offset) - 1
          : 0;

      start = currentPage - offset - extraPages - additionalPage;
      end = currentPage + offset + 1 - extraPages;

      setPages(pageNumbers.slice(start, end));
    }
  }, [currentPage, offset, pagesCount]);

  const padinationUnits =
    pages &&
    pages.map(page => (
      <PaginationUnit
        key={page}
        getPageChange={getPageChange}
        number={page}
        currentPage={currentPage}
      />
    ));

  return <div className="pagination-wrapper">{padinationUnits}</div>;
};

export default PaginationBar;
