import React, { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { useRouter } from "next/router";
import useSticky from "../../../../hooks/useSticky";

const HeaderGuest = ({ setShowHeaderUser }) => {
  // sticky nav
  const { sticky } = useSticky();

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signupOpen, setSingUpOpen] = useState(false);
  const [search, setSearch] = useState()

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
    setSearch()
  }, [router]);

  return (
    <header>
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid">
          <div className="header-top-inner">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8">
                <div className="header-top-icon d-flex align-items-center justify-content-between">
                  <a href="tel:1500081903" className="text-decoration-none text-dark" style={{ fontSize: "1.2rem" }}>
                    <i className="fas fa-phone"></i>1500 181 903
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-top-login d-flex justify-content-end align-items-center">
                  <div className="header-social mr-3">
                    <a href="https://www.tiktok.com/@nauphache" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark" style={{ fontSize: "1.2rem" }}>
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                  </div>
                  <div className="header-social">
                    <a onClick={() => setSignInOpen(!signInOpen)} className="text-decoration-none text-dark" style={{ cursor: 'pointer', fontSize: "1.2rem" }}>
                      <i className="fas fa-user-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          sticky
            ? "sticky header-area-2 sticky-header"
            : "header-area-2 sticky-header"
        }
        style={{ backgroundColor: "#5E7A8C" }} // Chỉnh màu nền ở đây
      >
        <div className="container-fluid">
          <div className="header-main-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <div className="header-logo">
                  <Link href="/">
                    <a>
                      <img
                        width="80px"
                        src="https://thinkapple.pl/wp-content/uploads/2015/04/apple-store.jpg"
                        alt="img"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="main-menu mr-30 d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul className="d-flex justify-content-center">
                      <li className="mx-3">
                        <Link href="/">
                          <a style={{ fontSize: "1.2rem" }}>Home</a>
                        </Link>
                      </li>
                      <li className="mx-3">
                        <Link href="/product">
                          <a style={{ fontSize: "1.2rem" }}>Product</a>
                        </Link>
                      </li>
                      <li className="mx-3">
                        <Link href="/about">
                          <a style={{ fontSize: "1.2rem" }}>About</a>
                        </Link>
                      </li>
                      <li className="mx-3">
                        <Link href="/contact">
                          <a style={{ fontSize: "1.2rem" }}>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="header-main-right d-flex justify-content-end">
                  <div className="search-area mx-3" style={{ fontSize: "1.2rem" }}>
                    <form className="search-form" action="#">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                          style={{
                            backgroundColor: "#f8f9fa",
                            borderColor: "#ced4da",
                          }}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="input-group-append">
                          <Link href={`/product?title=${search}`}>
                          <button
                            type="submit"
                            className="btn btn-info"
                            style={{
                              backgroundColor: "#3482A3",
                              borderColor: "#3482A3",
                            }}
                          >
                            <i className="fa fa-search"></i>
                          </button>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="header-btn pr-5">
                    <div className="menu-bar ml-20">
                      <a
                        className="side-toggle header-2"
                        href="#!"
                        onClick={() => {
                          setMenuOpen(!menuOpen);
                        }}
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={
          menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"
        }
      ></div>
      <div
        onClick={() => setCartOpen(false)}
        className={cartOpen ? "body-overlay opened" : "body-overlay"}
      ></div>

      <SignIn
        signInOpen={signInOpen}
        setSignInOpen={setSignInOpen}
        setShowHeaderUser={setShowHeaderUser}
      />
      <div
        onClick={() => setSignInOpen(false)}
        className={
          signInOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>

      <SignUp signupOpen={signupOpen} setSingUpOpen={setSingUpOpen} />
      <div
        onClick={() => setSingUpOpen(false)}
        className={
          signupOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </header>
  );
};

export default HeaderGuest;
