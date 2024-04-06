import React, { useEffect, useRef, useState } from "react";
import { Breadcrumb, Button } from "@themesberg/react-bootstrap";
import { useHistory } from "react-router-dom";
import { ManageCategoryTable } from "../../components/Tables";
import { Col, Row, Card, Form } from "@themesberg/react-bootstrap";

const ManageCategory = () => {
  const category = [
    {
      id: 1,
      type: "Iphone",
    },
    {
      id: 2,
      type: "Laptop",
    },
    {
      id: 3,
      type: "AirPods",
    },
    {
      id: 4,
      type: "Marshall",
    },
  ];
  const history = useHistory();
  const [categories, setCategories] = useState(category);
  const [showAdd, setShowAdd] = useState(false);
  const [categoryAdd, setCategoryAdd] = useState()
  // Danh sách giả lập danh mục

  // Hàm giả lập để lấy danh sách danh mục
  const fetchCategories = async () => {
    try {
      // Sử dụng danh sách giả lập thay vì gọi API
      setCategories(category); // Cập nhật state với danh sách giả lập
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const ref = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem("tokenAdmin");
    if (!token) {
      history.push("/sign-in");
    } else {
      fetchCategories(); // Gọi hàm fetchCategories khi component được render
    }
  }, [history]);

  const handleDelete = (categoryId) => {
    let newCategoryList = categories.filter((item) => item.id !== categoryId);
    setCategories(newCategoryList);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          {/* <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Manage Categories</Breadcrumb.Item>
          </Breadcrumb> */}
          <h4 style={{ color: "#3482A3", fontFamily: "Arial, sans-serif" }}>Category</h4>
        </div>
        <Button variant="primary" onClick={() => setShowAdd(!showAdd)}>Add Category</Button>
      </div>
      { showAdd &&
        <>
          <Row>
            <Col sm={15} className="mb-3">
              <Form.Group id="overview">
                <Form.Label>Add Category</Form.Label>
                <Form.Control
                  size="lg"
                  required
                  type="text"
                  ref={ref}
                  onChange={(e) => setCategoryAdd(e.target.value)}
                  value={categoryAdd}
                />
                <Button type='submit' onClick={() => {
                    setCategories([...categories, {id: Math.random() ,type: categoryAdd}])
                    setCategoryAdd('')
                    ref.current.focus()
                  }}>Save</Button>
              </Form.Group>
            </Col>
          </Row>{" "}
        </>
      }
      <ManageCategoryTable
        categories={categories}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ManageCategory;
