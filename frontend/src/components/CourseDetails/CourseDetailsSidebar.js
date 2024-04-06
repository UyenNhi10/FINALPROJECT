import React, { useEffect, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";
import { useRouter } from "next/router";
import { CartContext } from "../../contexts/Cart";

const CourseDetailsSidebar = ({ dataCourses }) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [course, setCourse] = useState();

  useEffect(() => {
    setCourse(dataCourses);
  }, [dataCourses]);

  const router = useRouter();

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "70%",
            padding: "unset",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          closeButton: {
            background: "yellow",
          },
        }}
        center
      >
        {/* <ReactPlayer
          url={course?.lessons[0]?.url}
          width="100%"
          height="calc(100vh - 200px)"
          controls={true}
        /> */}
      </Modal>
      <div className="course-video-widget">
        <div className="course-widget-wrapper mb-30">
          <div className="course-video-thumb w-img">
            <img src={course?.thumbnail} alt="image not found" />
            {/* <div className="sidber-video-btn">
              <span className="popup-video" onClick={onOpenModal}>
                <i className="fas fa-play"></i>
              </span>
            </div> */}
          </div>
          <div className="course-video-price">
            <span>{course?.price} $</span>
          </div>
          {/* <div className="course-video-body">
            <ul>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-filter"></i>
                  <span>Trình Độ</span>
                </div>
                <div className="video-corse-info">
                  <span>{course?.level}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-computer"></i>
                  <span>Bài Học</span>
                </div>
                <div className="video-corse-info">
                  <span>{course?.numberOfLessons} Bài Học</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-clock"></i>
                  <span>Thời Lượng</span>
                </div>
                <div className="video-corse-info">
                  <span>~2 phút/bài</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-menu-2"></i>
                  <span>Danh Mục</span>
                </div>
                <div className="video-corse-info">
                  <span>{course?.catalog}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-award"></i>
                  <span>Kiểm Chứng</span>
                </div>
                <div className="video-corse-info">
                  <span>Có </span>
                </div>
              </li>
            </ul>
          </div> */}
          <div className="video-wishlist pt-5">
            <CartContext.Consumer>
              {({ addToCart, cartItems }) => (
                <>
                  <button
                    className="video-cart-btn po"
                    onClick={() => {
                      addToCart(course);
                    }}
                    
                  >
                    <i className="fal fa-shopping-cart"></i>Add to cart
                  </button>
                </>
              )}
            </CartContext.Consumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseDetailsSidebar;
