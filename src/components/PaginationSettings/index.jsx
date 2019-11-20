import React from "react";

import "./PaginationSettings.scss";

const PaginationSettings = props => {
  const { getPagesCount, getOffset } = props;

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="pagination-settings-form" onSubmit={handleSubmit}>
      <label className="form-label">
        Total pages:
        <input
          className="form-input"
          type="number"
          name="totalPages"
          min="0"
          max="20"
          onChange={e => getPagesCount(Number(e.target.value))}
        />
      </label>
      <label className="form-label">
        Offset:
        <input
          className="form-input"
          type="number"
          name="Offset"
          min="0"
          max="10"
          onChange={e => getOffset(Number(e.target.value))}
        />
      </label>
    </form>
  );
};

export default PaginationSettings;
