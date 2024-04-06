import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SignIn from "./SignIn";

const MobileMenu = ({
  setMenuOpen,
  menuOpen,
  usernameProfile,
  avtUserProfile,
  logout,
}) => {
  const [signInOpen, setSignInOpen] = useState(false);

  const [home, setHome] = useState(false);
  const [courses, setcourses] = useState(false);
  const [pages, setPages] = useState(false);
  const [project, setProject] = useState(false);
  const [blog, setBlog] = useState(false);
  const router = useRouter();
  const [showBtnSignUp, setShowBtnSignUp] = useState(true);
  const [path, setPath] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setShowBtnSignUp(false);
    }
  }, []);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "courses") {
      setHome(false);
      setcourses(!courses);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "pages") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setProject(false);
      setPages(!pages);
    } else if (menu == "project") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(!project);
    } else if (menu == "blog") {
      setHome(false);
      setcourses(false);
      setBlog(!blog);
      setPages(false);
      setProject(false);
    } else if (menu == "instructor") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "zoom") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "events") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    } else if (menu == "faqs") {
      setHome(false);
      setcourses(false);
      setBlog(false);
      setPages(false);
      setProject(false);
    }
  };

  return (
    
    <div className="fix">
      <style jsx>{`
     .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 300px;
      background-color: #fff;
      transform: translateX(${menuOpen ? "0%" : "100%"});
      transition: transform 0.3s ease-in-out;
      z-index: 1000;
      overflow-y: auto;
      padding: 20px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    .menu-title {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333;
      text-align: center;
    }

    .menu-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .menu-item {
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .menu-item:hover {
      background-color: #f0f0f0;
    }

    .sub-menu {
      display: none;
      padding-left: 20px;
    }

    .menu-item.has-sub:hover .sub-menu {
      display: block;
    }

    .menu-item.has-sub::after {
      content: "\\25B8";
      position: absolute;
      right: 10px;
    }

    .sub-menu li {
      padding: 8px 0;
    }

    .menu-item a {
      text-decoration: none;
      color: #333;
      font-size: 16px;
    }

    .menu-item.has-avatar {
      display: flex;
      align-items: center;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .logout-btn {
      background-color: #f44336;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      cursor: pointer;
    }

    .logout-btn:hover {
      background-color: #d32f2f;
    }

    .contact-info {
      text-align: center;
      margin-top: 40px;
      color: #888;
    }

    .contact-info a {
      color: #888;
      text-decoration: none;
      margin-left: 5px;
    }

    .offcanvas-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .overlay-open {
      opacity: 1;
      pointer-events: auto;
    }
    
`}</style>

      <div className={menuOpen ? "side-info info-open" : "side-info"}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo mb-40">
            <div className="row align-items-center">
              
              <div className="col-3 text-end">
                <button
                  className="side-info-close"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="mm-menu mb-30 d-block d-xl-none">
            <ul>
              {!showBtnSignUp && (
                <>
                  <nav id="mobile-menu">
                    <ul>
                      <li className="menu-item-has-children">
                        <span className="pr-5">
                          <h5>Hi {usernameProfile} !</h5>
                        </span>
                        <img
                          className="rounded-circle shadow-lg rounded"
                          width="40px"
                          height="40px"
                          src={
                            avtUserProfile ||
                            "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                          }
                        />
                        <ul className="sub-menu">
                          <li>
                            <Link href="/my-course">
                              <a>My Product</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/profile">
                              <a>Edit Profile</a>
                            </Link>
                          </li>
                          <li>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={logout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <hr className="hr" />
                </>
              )}

              <li>
                <Link href="/product">
                  <a>Product</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a></a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="offset-widget offset_menu-top mb-20">
            <div className="header-menu-top-icon mb-20">
              <a href="#">
                <i className="fas fa-phone"></i>(1500) 181 903
              </a>
              {/* <a href="www.tiktok.com/@nauphache">
                <i className="fab fa-tiktok"> @nauphache</i>
              </a> */}
              <i className="fal fa-map-marker-alt"></i>
              <span>Nguyen Xi. P13, Binh Thanh, HCM</span>
            </div>
          </div>
          {showBtnSignUp && (
            <div className="offset-widget button mb-20 d-block d-lg-none">
              <span
                className="edu-four-btn"
                onClick={() => {
                  setSignInOpen(!signInOpen);
                }}
              >
               Register Now
              </span>
            </div>
          )}
        </div>
      </div>

      <SignIn signInOpen={signInOpen} setSignInOpen={setSignInOpen} />
      <div
        onClick={() => setSignInOpen(false)}
        className={
          signInOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </div>
  );
};

export default MobileMenu;
