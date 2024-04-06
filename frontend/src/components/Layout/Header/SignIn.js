import React, { useState, useEffect, useRef } from "react";
import SignUp from "./SignUp";

import axios from "../../../api/axios";
import { toast } from "react-toastify";
import { Button, Form, Modal, Spinner } from "react-bootstrap";

const SignIn = ({ setSignInOpen, signInOpen, setShowHeaderUser }) => {
  const userRef = useRef();
  const [signUpOpen, setSignUpOpen] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [emailReset, setEmailReset] = useState();
  const [showTypeCodeReset, setShowTypeCodeReset] = useState(false);
  const [codeReset, setCodeReset] = useState();
  const [loadingBtn, setLoadingBtn] = useState(false);

  const [passwordReset, setPasswordReset] = useState();
  const [confirmPasswordReset, setConfirmPasswordReset] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);

  const LOGIN_URL = "auth/login";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const sendMailReset = async () => {
    setLoadingBtn(true);
    var data = {
      email: emailReset,
    };
    var config = {
      method: "post",
      url: "https://courses-booking.vercel.app/auth/forgot-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        toast.info(response.data.data.message);
        setShowTypeCodeReset(true);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
    setLoading(false);
  };

  const handleChangePasswordReset = async () => {
    setLoading(true);
    var data = JSON.stringify({
      code: codeReset,
      password: passwordReset,
      confirmPassword: confirmPasswordReset,
    });

    var config = {
      method: "post",
      url: "https://courses-booking.vercel.app/auth/reset-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setShowTypeCodeReset(false);
        toast.success(response.data.data.message);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
    setLoading(false);
  };

  const handleSignIn = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(
        LOGIN_URL,
        JSON.stringify({ username: username, password: password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        const accessToken = res?.data?.data?.token?.accessToken;
        localStorage.setItem("token", accessToken);

        toast.success(res.data?.message);
        setSignInOpen(false);
        setShowHeaderUser(true);
      })
      .catch((err) => {
        const data = err?.response?.data;
        toast.error(data?.message);
        setUsername("");
        setPassword("");
      });
    setLoading(false);
  };

  return (
    <div className={signInOpen ? "signin-area open" : "signin-area"}>
      <div className="signin-area-wrapper">
        <div className="signup-box text-center">
          <div className="signup-text" >
            <h3  style={{ color: "#3482A3" }}>Login</h3>
          </div>
          
        </div>
        <div className="signup-form-wrapper">
          <div className="signup-wrapper">
            <input
              ref={userRef}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
          </div>
          <div className="signup-wrapper">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="signup-action">
            <div className="course-sidebar-list">
              <input className="signup-checkbo" type="checkbox" id="sing-in" />
              <label className="sign-check" htmlFor="sing-in">
                <span>Remember Password</span>
              </label>
            </div>
          </div>
          <div className="mb-20 gap-2 d-grid">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#3482A3", color: "white" }}
              onClick={handleSignIn}
              disabled={!username || !password ? true : false}
            >
              {" "}
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                
              )}
              {"  " }Login
            </button>
          </div>
          <div className="registered wrapper">
            <div className="not-register">
              <span>No account?</span>
              <span >
                <a
                  href="#!"
                  onClick={() => {
                    setSignUpOpen(!signUpOpen);
                  }}
                  style={{ color: "#3482A3" }}
                >
                 Register
                </a>
              </span>
            </div>
            <div className="forget-password">
              <button onClick={handleShow} className="btn btn-link"  style={{ color: "#3482A3" }}>
              Forgot password
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Registered Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="email@gmail.com"
                        autoFocus
                        onChange={(e) => setEmailReset(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Body>
                  {showTypeCodeReset && (
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                        Confirmation Code Sent to Your Email!
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nhận Mã Xác Nhận"
                          autoFocus
                          onChange={(e) => setCodeReset(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>A new password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Mật Khẩu"
                          autoFocus
                          onChange={(e) => setPasswordReset(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Enter a new password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Xác Nhận Mật Khẩu"
                          autoFocus
                          onChange={(e) =>
                            setConfirmPasswordReset(e.target.value)
                          }
                        />
                        {loading ? (
                          <Button variant="primary" disabled>
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />{" "}
                           Processing...
                          </Button>
                        ) : (
                          <Button
                            className="mt-20"
                            variant="success"
                            onClick={handleChangePasswordReset}
                          >
                            Change the password
                          </Button>
                        )}
                      </Form.Group>
                    </Form>
                  )}
                  <>
                    {!showTypeCodeReset && (
                      <>
                        <Button
                          className="mr-20"
                          variant="secondary"
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                        {!loadingBtn ? (
                          <Button variant="primary" onClick={sendMailReset}>
                            Reset Password
                          </Button>
                        ) : (
                          <Button variant="primary" disabled>
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />{" "}
                            Processing...
                          </Button>
                        )}
                      </>
                    )}
                  </>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="sign-social text-center">
            <span>Login With</span>
          </div>
          <div className="sign-social-icon">
            <div className="sign-facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9.034"
                height="18.531"
                viewBox="0 0 9.034 18.531"
              >
                <path
                  id="Path_212"
                  data-name="Path 212"
                  d="M183.106,757.2v-1.622c0-.811.116-1.274,1.39-1.274h1.621v-3.127h-2.664c-3.243,0-4.285,1.506-4.285,4.169v1.969h-2.085v3.127h1.969v9.265h4.054v-9.265h2.664l.347-3.243Z"
                  transform="translate(-177.083 -751.176)"
                  fill="#3482A3"
                />
              </svg>
              <a href="#">Facebook</a>
            </div>
            <div className="sign-gmail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.692"
                height="16.273"
                viewBox="0 0 21.692 16.273"
              >
                <g id="gmail" transform="translate(0 -63.953)">
                  <path
                    id="Path_8685"
                    data-name="Path 8685"
                    d="M1.479,169.418H4.93v-8.381l-2.26-3.946L0,157.339v10.6a1.479,1.479,0,0,0,1.479,1.479Z"
                    transform="translate(0 -89.192)"
                    fill="#3482A3"
                  />
                  <path
                    id="Path_8686"
                    data-name="Path 8686"
                    d="M395.636,169.418h3.451a1.479,1.479,0,0,0,1.479-1.479v-10.6l-2.666-.248-2.264,3.946v8.381Z"
                    transform="translate(-378.874 -89.192)"
                    fill="#3482A3"
                  />
                  <path
                    id="Path_8687"
                    data-name="Path 8687"
                    d="M349.816,65.436,347.789,69.3l2.027,2.541,4.93-3.7V66.176A2.219,2.219,0,0,0,351.2,64.4Z"
                    transform="translate(-333.054)"
                    fill="#ffbc00"
                  />
                  <path
                    id="Path_8688"
                    data-name="Path 8688"
                    d="M72.7,105.365l-1.932-4.08L72.7,98.956l5.916,4.437,5.916-4.437v6.409L78.619,109.8Z"
                    transform="translate(-67.773 -33.52)"
                    fill="#ff4131"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_8689"
                    data-name="Path 8689"
                    d="M0,66.176v1.972l4.93,3.7V65.436L3.55,64.4A2.219,2.219,0,0,0,0,66.176Z"
                    transform="translate(0)"
                    fill="#e51c19"
                  />
                </g>
              </svg>
              <a href="#">Google</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas-overlay"
        onClick={() => setSignInOpen(false)}
      ></div>
      <SignUp signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen} />
      <div
        onClick={() => setSignUpOpen(false)}
        className={
          signUpOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"
        }
      ></div>
    </div>
  );
};

export default SignIn;
