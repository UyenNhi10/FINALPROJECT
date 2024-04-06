import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import {
  faAngleDown,
  faAngleUp,
  faCheckCircle,
  faEllipsisH,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  ButtonGroup,
} from "@themesberg/react-bootstrap";

import { pageTraffic, pageRanking } from "../data/tables";
import axios from "../api/axios";
import { useState } from "react";
import Modals from "../pages/components/Modals";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination/Pagination";

import { ToastContainer, toast } from "react-toastify";
import ModalDetailOrders from "../pages/components/ModalDetailOrder";
const DATA_COURSE_URL = "/courses";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return value ? (
    <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  ) : (
    "--"
  );
};

export const PageVisitsTable = ({ listUsers }) => {
  // Get current posts
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listUsers.slice(indexOfFirstPost, indexOfLastPost);
  const TableRow = (props) => {
    const { email, isPurchased, phoneNumber } = props;

    const textColor = isPurchased ? "text-success" : "text-info";

    return (
      <>
        <tr>
          <th scope="row">{email}</th>
          <td className={`${textColor} me-3`}>
            {isPurchased ? "Member" : "Customer"}
          </td>
          <td>{phoneNumber}</td>
        </tr>
      </>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5 style={{color: "#3482A3", fontFamily: "Arial, sans-serif" }} >User Recently Registered Account </h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">
              See All
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Member</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((pv) => (
            <TableRow key={pv._id} {...pv} />
          ))}
        </tbody>
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={listUsers.length}
          paginate={paginate}
        />
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const {
      id,
      source,
      sourceIcon,
      sourceIconColor,
      sourceType,
      category,
      rank,
      trafficShare,
      change,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon
            icon={sourceIcon}
            className={`icon icon-xs text-${sourceIconColor} w-30`}
          />
          {source}
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? rank : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar
                variant="primary"
                className="progress-lg mb-0"
                now={trafficShare}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0">Change</th>
            </tr>
          </thead>
          <tbody>
            {pageTraffic.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const {
      country,
      countryImage,
      overallRank,
      overallRankChange,
      travelRank,
      travelRankChange,
      widgetsRank,
      widgetsRankChange,
    } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image
              src={countryImage}
              className="image-small rounded-circle me-2"
            />
            <div>
              <span className="h6">{country}</span>
            </div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">{overallRank ? overallRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">{travelRank ? travelRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">{widgetsRank ? widgetsRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map((r) => (
              <TableRow key={`ranking-${r.id}`} {...r} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const TransactionsTable = () => {
  const DATA_ORDER_URL = "/orders";

  const [dataOrder, setDataOrder] = useState([]);

  const [totalTransactions, setTotalTransactions] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const history = useHistory();

  const token = localStorage.getItem("tokenAdmin");

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataOrder.slice(indexOfFirstPost, indexOfLastPost);

  const getDataAllOrder = async () => {
    setLoading(true);
    await axios
      .get(DATA_ORDER_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataOrder(res?.data?.data);
        setTotalTransactions(res?.data?.data.length);
      })
      .catch((err) => {
        if (err.response.data.message === "Unauthorized") {
          history.push("/sign-in");
        }
      });
    setLoading(false);
  };

  useEffect(() => {
    getDataAllOrder();
  }, []);

  const getDetailOrder = async (id) => {
    setLoading(true);
    await axios
      .get(`${DATA_ORDER_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setShowModalDetail(true);
        setDataDetailOrder(res?.data?.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleOrderCompleted = async (id) => {
    // await axios
    //   .post(`orders/${id}/complete`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     toast.success(res?.data?.data?.message);
    //   })
    //   .catch((err) => {
    //     toast.error(err?.response?.data?.message);
    //   });

    var config = {
      method: "post",
      url: `orders/${id}/complete`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        toast.success(response?.data?.data?.message);
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message);
      });
  };

  return (
    <div>
         <style>
         {`
      /* Thay đổi màu chủ đạo */
      :root {
        --primary-color: #3482A3;
      }

      /* Thêm CSS tại đây */

      /* Sử dụng màu chủ đạo */
      .user-table th {
        background-color: var(--primary-color);
        color: #fff;
      }

      .user-table .btn-info {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
      }

      .user-table .btn-info:hover {
        background-color: #2b6886; /* Tăng sáng màu chủ đạo khi hover */
        border-color: #2b6886;
      }

      .pagination .page-item.active .page-link {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
      }

      .pagination .page-link {
        color: var(--primary-color);
      }

      .pagination .page-link:hover {
        color: #2b6886; /* Tăng sáng màu chủ đạo khi hover */
      }
      
      `}
</style>

<Card border="light" className="table-wrapper table-responsive shadow-sm">
          <ModalDetailOrders
            setShowModalDetail={setShowModalDetail}
            showModalDetail={showModalDetail}
            dataDetailOrder={dataDetailOrder}
          />
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom">#</th>
                <th className="border-bottom">Member Name</th>
                <th className="border-bottom">Date Create</th>
                <th className="border-bottom">Status Change Date</th>
                <th className="border-bottom">Total Order</th>
                <th className="border-bottom">Order Status</th>
                <th className="border-bottom">Edit</th>
              </tr>
            </thead>
            {loading && (
              <>
                <div className="spinner-grow text-info" role="status"></div>
                <div className="spinner-grow text-info" role="status"></div>
                <div className="spinner-grow text-info" role="status"></div>
              </>
            )}
            <tbody>
              {currentPosts?.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>
                    <span className="fw-normal">
                      {item.customerInfo.fullName}
                    </span>
                  </td>
                  <td>
                    <span className="fw-normal">{item.createdAt}</span>
                  </td>
                  <td>
                    <span className="fw-normal">{item.updatedAt}</span>
                  </td>
                  <td>
                    <span className="fw-normal">{item.totalPrice}</span>
                  </td>
                  <td>
                    <span
                      className={`fw-normal text-${
                        item.status === "COMPLETED"
                          ? "success"
                          : item.status === "PENDING"
                          ? "warning"
                          : item.status === "CANCELED"
                          ? "danger"
                          : "primary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle
                        as={Button}
                        split
                        variant="link"
                        className="text-dark m-0 p-0"
                      >
                        <span className="icon icon-sm">
                          <FontAwesomeIcon
                            icon={faEllipsisH}
                            className="icon-dark"
                          />
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => getDetailOrder(item._id)}
                          >
                            <FontAwesomeIcon icon={faEye} className="me-2" />{" "}
                            Order Details
                          </button>
                        </Dropdown.Item>
                        {item.status !== "COMPLETED" ? (
                          <Dropdown.Item className="text-danger">
                            <button
                              type="button"
                              className="btn btn-outline-warning w-100"
                              onClick={() => handleOrderCompleted(item._id)}
                            >
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="me-2"
                              />{" "}
                            Paid
                            </button>
                          </Dropdown.Item>
                        ) : (
                          ""
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={dataOrder.length}
              paginate={paginate}
            />
            <small className="fw-bold mt-3">
              <b>{totalTransactions}</b> <b>Order</b>
            </small>
          </Card.Footer>
          <ModalDetailOrders
            setShowModalDetail={setShowModalDetail}
            showModalDetail={showModalDetail}
            dataDetailOrder={dataDetailOrder}
          />
          <ToastContainer />
        </Card.Body>
      </Card>
    </div>
  );
};

export const DataCourseTable = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);
  const token = localStorage.getItem("tokenAdmin");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [dataDetail, setDataDetail] = useState();
  const [idCourseDel, setIdCourseDel] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const history = useHistory();

  const handleClose = () => setConfirmDelete(false);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataCourses.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getDataAllCourses = async () => {
    setLoading(true);
    await axios
      .get(DATA_COURSE_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataCourses(res.data.data);
        setTotalCourses(res.data.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    getDataAllCourses();
  }, []);

  const showConfirmDel = (id) => {
    setConfirmDelete(true);
    setIdCourseDel(id);
  };

  const deleteCourse = async () => {
    await axios
      .delete(`${DATA_COURSE_URL}/${idCourseDel}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res?.data?.message)    })
      .catch((err) => {
        if (err.response.data.message === "Unauthorized") {
          history.push("/sign-in");
        }
        toast.error(err?.response?.data?.message);
      });
    setDataCourses(dataCourses);
    setConfirmDelete(false);
  };

  const showDetailCourse = async (id) => {
    setLoading(true);
    await axios
      .get(`${DATA_COURSE_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataDetail(res.data.data);
      })
      .catch((err) => {
        if (err.response.data.message === "Unauthorized") {
          history.push("/sign-in");
        }
      });
    setLoading(false);
    setShowModals(true);
  };

  return (
    <div>
       <style>
  {`

/* CSS for User Table */


/* Thay đổi màu chủ đạo */
      :root {
        --primary-color: #3482A3;
      }

      /* Thêm CSS tại đây */

      /* Sử dụng màu chủ đạo */
      .user-table th {
        background-color: var(--primary-color);
        color: #fff;
      }



.user-table .text-success {
  color: #28a745 !important;
}

.user-table .text-danger {
  color: #dc3545 !important;
}

.user-table .text-warning {
  color: #ffc107 !important;
}

/* CSS for Pagination */
.pagination {
  justify-content: center;
}

.pagination .page-item.active .page-link {
  background-color: #5e72e4;
  border-color: #5e72e4;
}

/* CSS for Table Wrapper */
.table-wrapper {
  overflow-x: auto;
}

/* CSS for Modals */
.modal-content {
  border-radius: 1.5rem;
}

/* CSS for Card */
.card {
  border-radius: 1.5rem;
}

.card-header h5 {
  font-size: 1.1rem;
}

.card-header .btn {
  font-size: 0.875rem;
}

/* CSS for Table Headers */
.card-header .table thead th {
  font-size: 0.85rem;
  font-weight: 500;
  color: #6c757d;
  border-bottom-width: 1px;
}

/* CSS for Table Rows */
.card .table tbody tr {
  transition: all 0.3s;
}

.card .table tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

/* CSS for Icons in Table */
.icon {
  margin-right: 0.5rem;
}

/* CSS for Progress Bars */
.progress {
  height: 12px;
  border-radius: 10px;
  background-color: rgba(218, 222, 227, 0.5);
}

.progress-lg {
  height: 24px;
}

/* CSS for Value Change */
.value-change {
  font-weight: bold;
}

.value-change .icon {
  margin-right: 0.25rem;
}

/* CSS for Buttons */
.btn-info {
  background-color: #5e72e4;
  border-color: #5e72e4;
}

.btn-info:hover {
  background-color: #3482A3;
  border-color: #3482A3;
}

.btn-outline-danger {
  color: #f5365c;
  border-color: #f5365c;
}

.btn-outline-danger:hover {
  color: #f5365c;
  background-color: rgba(245, 54, 92, 0.1);
}

.btn-outline-warning {
  color: #ff9f43;
  border-color: #ff9f43;
}

.btn-outline-warning:hover {
  color: #ff9f43;
  background-color: rgba(255, 159, 67, 0.1);
}

.btn-outline-info {
  color: #11cdef;
  border-color: #11cdef;
}

.btn-outline-info:hover {
  color: #11cdef;
  background-color: rgba(17, 205, 239, 0.1);
}

  `}
</style>
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <ToastContainer />
        <Card.Body className="pt-0">
          <Table hover className="user-table align-items-center">
            <thead>
              <tr>
                <th className="border-bottom fs-6">#</th>
                <th className="border-bottom fs-6">Product Name </th>
                <th className="border-bottom fs-6">Date Create</th>
                <th className="border-bottom fs-6"></th>
                <th className="border-bottom fs-6"></th>
                <th className="border-bottom fs-6">Price</th>
                <th className="border-bottom fs-6">Action</th>
              </tr>
            </thead>
            {loading && (
              <div className="d-flex justify-content-center text-warning">
                <div className="spinner-grow text-info" role="status"></div>
                <div className="spinner-grow text-info" role="status"></div>
                <div className="spinner-grow text-info" role="status"></div>
              </div>
            )}
            <tbody>
              {currentPosts?.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={() => showDetailCourse(item._id)}
                    >
                      {index + 1}
                    </button>
                  </td>
                  <td>
                    <span className="fs-5">{item.title}</span>
                  </td>
                  <td>
                    <span className="fs-5">{item.createdAt}</span>
                  </td>
                  <td>
                    <span className="fs-5">{item.numberOfLessons}</span>
                  </td>
                  <td>
                    <span
                      className={`fs-5 text-${
                        item.level === "BASIC"
                          ? "info"
                          : item.level === "ADVANCE"
                          ? "success"
                          : item.level === "PRO"
                          ? "danger"
                          : "warning"
                      }`}
                    >
                      {item.level}
                    </span>
                  </td>
                  <td>
                    <span className="fs-5">{item.price} đ</span>
                  </td>
                  <td>
                    <div>
                      <Modals
                        showModals={showModals}
                        setShowModals={setShowModals}
                        dataDetail={dataDetail}
                      />
                    </div>

                    <div>
                      <Modal
                        show={confirmDelete}
                        onHide={handleClose}
                        animation={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Attention!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        Are You Sure You Want To Delete This Product?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="warning" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="secondary" onClick={deleteCourse}>
                          Confirm
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>

                    <Dropdown as={ButtonGroup}>
                      <button
                        type="button"
                        className="btn btn-danger w-100"
                        onClick={() => showConfirmDel(item._id)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                        Detele
                      </button>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <Nav>
              <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={dataCourses.length}
                paginate={paginate}
              />
            </Nav>
            <small className="fw-bold mt-3">
              <b>{totalCourses}</b> <b>Product</b>
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
};

export const ManageCategoryTable = ({ categories, handleDelete }) => {
  const renderCategoryTree = (categories) => {
    return categories.map((category) => (
      <ul key={category.id}>
        <li>
          <span>{category.type}</span>
          <div>
            <button className="btn btn-primary me-2">Edit</button>
            <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>Delete</button>
          </div>
        </li>
        {category.children && renderCategoryTree(category.children)}
      </ul>
    ));
  };

  return (
    <div className="category-tree">
      {/* <h5 >Manage Categories</h5> */}
      {renderCategoryTree(categories)}
    </div>
  );
};

