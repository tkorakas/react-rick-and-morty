import React from 'react';

const Pagination = (props) => {
  return (
    <div className="pagination">
      {props.previous ? <a href="#" onClick={props.previous}>Previous</a> : null}
      {props.next ? <a href="#" onClick={props.next}>Next</a> : null}
    </div>
  )
}

export default Pagination;