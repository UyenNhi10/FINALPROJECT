import React, { useEffect, useState } from "react";
import { Breadcrumb } from "@themesberg/react-bootstrap";
import { DataCourseTable } from "../components/Tables";
import { useHistory } from "react-router-dom";

export default () => {
  let history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("tokenAdmin");
    if (!token) {
      history.push("/sign-in");
    }
  });

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4" style={{ backgroundColor: "#f8f9fa", borderBottom: "1px solid #dee2e6" }}>
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          ></Breadcrumb>
          <h4 style={{color: "#3482A3", fontFamily: "Arial, sans-serif" }}>Manage Products</h4>
          {/* <p className="mb-0">Information for Each Product</p> */}
        </div>
        <img src="https://c8.alamy.com/compfr/da77kb/logo-apple-store-da77kb.jpg" alt="Background Image" style={{ maxWidth: "100px" }} />
      </div>

      <DataCourseTable />
    </>
  );
};
