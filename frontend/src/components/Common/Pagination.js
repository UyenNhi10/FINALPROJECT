import React from "react";

const Pagination = ({ numPage }) => {
  const pages = [];
  for (let i = 0; i < numPage; i++) {
    pages.push(
      <div className="edu-pagination mt-30 mb-20" key={i}>
        <ul>
          <li>
            <a href="#">
              <i className="fal fa-angle-left"></i>
            </a>
          </li>
          <li className="active">
            <a href="#">
              <span>{i + 1}</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fal fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
  return <div>{pages}</div>;
};

export default Pagination;
