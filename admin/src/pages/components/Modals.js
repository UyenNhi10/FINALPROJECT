import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import axios from "../../api/axios";
import { toast } from "react-toastify";

function Modals({ showModals, setShowModals, dataDetail }) {
  const [editTitle, setEditTitle] = useState();
  const [editPrice, setEditPrice] = useState();
  const [editCategory, setEditCategory] = useState();
  const [editLessonsFormList, setEditLessonsFormList] = useState([
    { title: "", url: "", document: "", isTrial: false },
  ]);

  const [editTrial, setEditTrial] = useState(Boolean);
  const token = localStorage.getItem("tokenAdmin");

  let history = useHistory();

  const handleClose = () => setShowModals(false);

  const closeButton = () => setShowModals(false);

  const DATA_COURSE_URL = "/courses";

  useEffect(() => {
    setEditTitle(dataDetail?.title);
    setEditPrice(dataDetail?.price);
    setEditCategory(dataDetail?.category);
    setEditLessonsFormList(dataDetail?.lessons);
  }, [dataDetail]);

  const handleServiceAdd = () => {
    setEditLessonsFormList([
      ...editLessonsFormList,
      { title: "", url: "", document: "", isTrial: editTrial },
    ]);
  };

  const handleOnchangeTrialListLessons = (isChecked) => {
    setEditTrial(isChecked);
  };

  const handleServiceRemove = (index) => {
    const list = [...editLessonsFormList];
    list.splice(index, 1);
    setEditLessonsFormList(list);
  };

  const updateCourse = async () => {
    await axios
      .put(`${DATA_COURSE_URL}/${dataDetail._id}`, {
        title: editTitle,
        category: editCategory,
        price: editPrice,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
          setEditCategory(res.data.catalog)
          setEditPrice(res.data.price);
          setEditTitle(res.data.title);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModals(false);
  };
  return (
    <>
      <Modal
        onHide={handleClose}
        show={showModals}
        setShow={setShowModals}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="type"
                value={editTitle}
                autoFocus
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price Product</Form.Label>
              <Form.Control
                type="number"
                value={editPrice}
                autoFocus
                onChange={(e) => setEditPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group id="category">
              <Form.Label>Category</Form.Label>
              <Form.Select
                type="checkbox"
                required
                isChecked={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
              >
                <option disabled>{editCategory}</option>
                <option value="Iphone">Iphone</option>
                <option value="Laptop">Laptop</option>
                <option value="AirPods">AirPods</option>
                <option value="Marshall">Marshall</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateCourse}>
          Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
