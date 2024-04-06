import React, { useEffect, useState } from "react";

import ImageUploading from "react-images-uploading";
import { WithContext as ReactTags } from "react-tag-input";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Ai from "../../src/pages/components/Ai";

import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import axios from "../api/axios";
import { useHistory } from "react-router-dom";

export const GeneralInfoForm = () => {
  const [images, setImages] = useState();
  const [lessonsFormList, setLessonsFormList] = useState([
    { title: "", url: "", isTrial: false },
  ]);

  const [titleCourse, setTitleCourse] = useState("");
  const [level, setLevel] = useState("");
  const [highlights, setHightLights] = useState([]);
  const [overview, setOverview] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [catalog, setCatalog] = useState("");
  const [price, setPrice] = useState();
  const [durationInSeconds, setDurationInSeconds] = useState(0);
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState();
  const token = localStorage.getItem("tokenAdmin");

  const history = useHistory();
  const nameAdmin = localStorage.getItem("nameAdmin");

  const URL_COURSER = "/courses";
  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleDeleteHighlights = (i) => {
    setHightLights(highlights.filter((highlight, index) => index !== i));
  };

  const handleAdditionHighlights = (highlight) => {
    setHightLights([...highlights, highlight]);
  };


  const handleServiceRemove = (index) => {
    const list = [...lessonsFormList];
    list.splice(index, 1);
    setLessonsFormList(list);
  };

  async function saveCourse() {
    setLoading(true);
    await axios
      .post(
        URL_COURSER,
        {
          title: titleCourse,
          thumbnail: images,
          highlights: highlights.map((item) => item.text),
          introduce: introduce,
          overview: overview,
          catalog: catalog,
          price: parseInt(price),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        history.push("course");
        console.log(res);
        toast.success(res?.dada?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.message);
      });
    setLoading(false);
  }

  const handleOnchangeTitleListLessons = (e, index) => {
    const { value } = e.target;

    const list = [...lessonsFormList];
    list[index].title = value;

    setLessonsFormList(list);
  };

  const handleOnchangeURLImage = (e, index) => {
    const { value } = e.target;

    setImages(value);
  };

  const handleOnchangeTrialListLessons = (e, index) => {
    const list = [...lessonsFormList];
    list[index].isTrial = e;

    setLessonsFormList(list);
  };

  return (
    
    <Card border="light" className="bg-white shadow-sm mb-3" >
      <style>
  {`

 /* Custom CSS for GeneralInfoForm */
      .btn-info {
        background-color: #3482A3;
        border-color: #3482A3;
        color: white;
        font-weight: bold;
      }

      .btn-info:hover {
        background-color: #2b6a8f;
        border-color: #2b6a8f;
      }

      .form-label {
        font-weight: bold;
        color: #333;
      }

      .form-control {
        border-color: #ccc;
      }

      .form-control:focus {
        border-color: #3482A3;
        box-shadow: 0 0 0 0.2rem rgba(52, 130, 163, 0.25);
      }

      .react-tags .react-tags__selected-tag {
        background-color: #3482A3;
        color: white;
      }

      .react-tags .react-tags__selected-tag:hover {
        background-color: #2b6a8f;
      }
    }
  `}
</style>

      <ToastContainer />
      <Card.Body className="d-flex justify-content-center align-items-center">
      <div>
        <h5 className="mb-4" style={{color: "#3482A3", fontFamily: "Arial, sans-serif", textAlign: "center" }} >Create Product</h5>
        <Form >
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="title-course">
                <Form.Label>Title Product</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Title Product"
                  onChange={(e) => setTitleCourse(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Label>Link Image</Form.Label>
            <Form.Control
                  required
                  type="text"
                  id="url"
                  placeholder="Link Image"
                  value={images}
                  onChange={(e) => handleOnchangeURLImage(e)}
                />
            </Col>
          </Row>
          <Row>
          <Ai url='/my_model/'/>
            <Col md={6} className="mb-3">
              <div>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  type="checkbox"
                  required
                  onChange={(e) => setCatalog(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Iphone" selected={true}>Iphone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="AirPods">AirPods</option>
                  <option value="Marshall">Marshall</option>
                </Form.Select>
              </div>
            </Col>
            <Col md={10} className="mb-3">
              <div>
                <Form.Label>Product Highlights</Form.Label>
               <ReactTags
                  tags={highlights}
                  delimiters={delimiters}
                  handleDelete={handleDeleteHighlights}
                  handleAddition={handleAdditionHighlights}
                  inputFieldPosition="bottom"
                  autocomplete
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={5} className="mb-3">
              <Form.Group id="price">
                <Form.Label>Price Product</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Price.."
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          {/* <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="price">
                <Form.Label>Thời Lượng Trung Bình</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="(phút)"
                  onChange={(e) => setDurationInSeconds(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row> */}

          {/* <h5 className="my-4">Introduce</h5> */}
          <Row>
            <Col sm={15} className="mb-3">
              <Form.Group id="overview">
                <Form.Label>Overview</Form.Label>
                <Form.Control
                  size="lg"
                  required
                  type="text"
                  onChange={(e) => setOverview(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={15} className="mb-3">
              <Form.Group id="introduce">
                <Form.Label>Overview Product</Form.Label>
                <Form.Control
                  size="lg"
                  required
                  type="text"
                  onChange={(e) => setIntroduce(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          {/* <h5 className="my-4">Danh Sách Các Bài Học</h5>
          {lessonsFormList.map((singleList, index) => (
            <Col sm={10} className="mb-3" key={index}>
              <Form.Group className="mb-2">
                <h4>{index + 1}</h4>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <span>
                    <Form.Check
                      label="Học Thử"
                      value={singleList.isTrial}
                      onChange={(e) =>
                        handleOnchangeTrialListLessons(e.target.checked, index)
                      }
                    />
                  </span>
                </div>
                <span>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-1">
                    {lessonsFormList.length !== 0 && (
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={(index) => handleServiceRemove(index)}
                      >
                        Xóa
                      </button>
                    )}
                  </div>
                </span>
                <span>
                  <Form.Control
                    required
                    id="title"
                    type="text"
                    placeholder="Tiêu Đề Bài Học"
                    value={singleList.title}
                    onChange={(e) => handleOnchangeTitleListLessons(e, index)}
                  />
                  <div className="pb-1"></div>
                </span>
                <Form.Control
                  required
                  type="text"
                  id="url"
                  placeholder="Link Bài Học"
                  value={singleList.url}
                  onChange={(e) => handleOnchangeURLListLessons(e, index)}
                />
              </Form.Group>
            </Col>
          ))} */}
          {/* <div className="mt-3 mb-10">
            <Button variant="primary" type="submit" onClick={handleServiceAdd}>
              Thêm Bài Học
            </Button>
          </div> */}
{/* 
          <div>
            <Form.Control
              type="text"
              id="url"
              placeholder="Link Tài Liệu"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
            />
          </div> */}
          <div className="mt-3">
            {!loading ? (
              <button
                type="button"
                className="btn btn-info w-50"
                onClick={saveCourse}
               
              >
                Save New Product!
              </button>
            ) : (
              <button className="btn btn-primary w-50" type="button" disabled>
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Saving ...
              </button>
            )}
          </div>
        </Form>
        </div>
      </Card.Body>
    </Card>
  );
};
