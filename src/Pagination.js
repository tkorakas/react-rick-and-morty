import React from 'react';

const Pagination = (props) => {
  return (
    <div className="pagination">
      <a href="#" onClick={props.previous}>Previous</a>
      <a href="#" onClick={props.next}>Next</a>
    </div>
  )
}

export default Pagination;