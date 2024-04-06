import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Pagination from "../Common/Pagination";
import CourseBar from "../Course/CourseBar";
import Link from "next/link";
import axios from "../../api/axios";
import * as ReactBootStrap from "react-bootstrap";

import { useRouter } from "next/router";

const CourseMain = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isActive, setActive] = useState("false");
  let DATA_COURSES_URL = "courses";

  const category = [{
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
  }]
  const router = useRouter();
  const { title } = router.query;

  title ? DATA_COURSES_URL = DATA_COURSES_URL + `?title=${title}` : DATA_COURSES_URL = 'courses'

  async function getDataCourse(isAll) {
    const token = localStorage.getItem("token");
    if(isAll === 'all') {
      DATA_COURSES_URL = 'courses'
    }
    try {
      await axios
        .get(DATA_COURSES_URL, JSON.stringify({}), {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setDataCourses(res.data.data);
          setNumPage(res.data.pagination.pageCount);
        });
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleFilter(e) {
    const token = localStorage.getItem("token");
    var config = {
      method: "get",
      url: `http://localhost:3002/courses?catalog=${e}`,
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
    };

    axios(config)
      .then(function (response) {
        console.log("chevck", response.data.data);
        setDataCourses(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getDataCourse();
  }, [title]);

  const handleToggle = () => {
    setActive(!isActive);
  };

  function NumToTime(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    if (minutes + "".length < 2) {
      minutes = "0" + minutes;
    }
    return hours + ":" + minutes;
  }

  function handleGetDetail(id) {
    router.push("/product-details");
    localStorage.setItem("id", id);
  }

  return (
    <main>
      <style >{`
/* Định dạng chung cho mỗi mục trong Category */
.course-sidebar-list {
  list-style: none;
  padding: 10px 0;
}

/* Checkbox ẩn đi */
.edu-check-box {
  display: none;
}

/* Thiết lập style cho label */
.edu-check-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  margin: 0;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  color: #555;
  border: 1px solid transparent;
}

/* Hiệu ứng khi hover */
.edu-check-label:hover {
  background-color: #f2f2f2;
  color: #333;
  transform: translateY(-2px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Hiệu ứng khi được chọn */
.edu-check-box:checked + .edu-check-label {
  background: linear-gradient(120deg, #347BA3, #3482A3);
  color: #fff;
  border-color: #3482A3;
}

/* Hiệu ứng icon khi được chọn */
.edu-check-box:checked + .edu-check-label::before {
  content: "\f00c"; /* FontAwesome icon check */
  font-family: "Font Awesome 5 Free";
  margin-right: 10px;
}

/* Hiệu ứng hover khi được chọn */
.edu-check-box:checked + .edu-check-label:hover {
  background: linear-gradient(120deg, #3482A3, #347BA3);
}

/* Hiệu ứng icon khi hover */
.edu-check-box:checked + .edu-check-label:hover::before {
  content: "\f00c"; /* FontAwesome icon check */
}


      `}</style>
      
      <Breadcrumb breadcrumbTitle="Product" breadcrumbSubTitle="Product" />
      <CourseBar />
      {loading ? (
        <section className="course-content-area pb-90">
          <div className="container">
            <div className="row mb-10">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div>
                  <div className="course-sidebar-widget mb-20">
                    <div
                      className={`course-sidebar-info ${
                        isActive ? "danger" : "content-hidden"
                      }`}>
                      <h3 className="drop-btn" onClick={handleToggle}>
                        Category
                      </h3>
                      <ul>
                        <li>
                          <div className="course-sidebar-list pb-5">
                            <input
                              className="edu-check-box"
                              type="checkbox"
                              id="e-bus"
                              onClick={() => getDataCourse('all')}
                            />
                            <label className="edu-check-label" htmlFor="e-bus">
                              All
                            </label>
                          </div>
                        </li>
                        {category.map((item) => (
                                   <li key={item.id}>
                                   <div className="course-sidebar-list">
                                     <input
                                       className="edu-check-box"
                                       type="checkbox"
                                       id={item.type}
                                       value={item.type}
                                       onChange={(e) =>
                                         handleFilter(e.target.defaultValue)
                                       }
                                     />
                                     <label className="edu-check-label" htmlFor={item.type}>
                                       {item.type}
                                     </label>
                                   </div>
                                 </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="row">
                  {dataCourses?.map((item) => (
                    <div className="col-xl-4 col-lg-6 col-md-6" key={item._id}>
                      <div className="protfolio-course-2-wrapper mb-30">
                        <div className="student-course-img">
                          <Link href="/product">
                            <a>
                              <img
                                src={item.thumbnail}
                                alt="course-img"
                                className="rounded"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="course-cart">
                          <div className="course-info-wrapper">
                            <div className="cart-info-body">
                              <Link href="/product">
                                <>
                                  <a className="category-color category-color-3 mr-10">
                                    {item.catalog}
                                  </a>
                                </>
                              </Link>
                              <Link href="/product-details">
                                <a>
                                  <h3>{item.title}</h3>
                                </a>
                              </Link>
                              <div className="cart-lavel">
                                <h5>
                                  Level : <span>{item.level}</span>
                                </h5>
                              </div>
                              <div className="info-cart-text">
                                <ul>
                                  {item.highlights?.map((hight) => (
                                    <li key={hight}>
                                      <i className="far fa-check"></i>
                                      {hight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="course-action">
                                <button
                                  className="view-details-btn"
                                  onClick={() => handleGetDetail(item._id)}>
                                  <i className="flaticon-like">Details</i>
                                </button>
                                <Link href="/product-details">
                                  <a className="c-share-btn">
                                    <i className="flaticon-previous"></i>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-course-2-content">
                          <div className="portfolio-course-wrapper">
                            <div className="portfolio-price">
                              <span>{item.price} $</span>
                            </div>
                            <div className="portfolio-course-2">
                              <h3>
                                <Link href="/product-details">
                                  <a>{item.title}</a>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                        {/* <div className="course-2-footer">
                          <div className="coursee-clock">
                            <i className="flaticon-clock"></i>
                            <span>Phút/Bài Học</span>
                          </div>
                          <div className="course-creadit">
                            <i className="flaticon-menu-1"></i>
                            <span>{item.numberOfLessons} Products</span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>
                {dataCourses.length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <Pagination numPage={numPage} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center">
          <ReactBootStrap.Spinner animation="border" />
        </div>
      )}
    </main>
  );
};

export default CourseMain;
