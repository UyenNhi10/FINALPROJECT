import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";
import ManageCategory from "./components/ManageCategory";

export default () => {
  const history = useHistory();

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4" style={{ backgroundColor: "#f8f9fa", borderBottom: "1px solid #dee2e6" }}>
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          ></Breadcrumb>
          <h4 style={{ color: "#3482A3", fontFamily: "Arial, sans-serif" }}>Manage Categories</h4>
          {/* <p className="mb-0">Information for Each Category</p> */}
        </div>
        <img src="https://minhtuanmobile.com/uploads/blog/nguoi-dung-viet-nam-duoc-loi-gi-khi-apple-mo-cua-hang-truc-tuyen-230512115848.jpg" alt="Category Image" style={{ maxWidth: "100px" }} />
      </div>

      <ManageCategory/>
    </>
  );
};

