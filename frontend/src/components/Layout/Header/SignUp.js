import React, { useState } from "react";

import axios from "../../../api/axios";
import { toast } from "react-toastify";

const SignUp = ({ setSignUpOpen, signUpOpen }) => {
  const [emailReg, setEmailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [telReg, setTelReg] = useState("");

  const REGISTER_URL = "auth/register";

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = await axios
      .post(
        REGISTER_URL,
        JSON.stringify({
          phoneNumber: telReg,
          password: passwordReg,
          email: emailReg,
          fullName: usernameReg,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .catch((err) => {
        const { data } = err?.response;

        if (typeof data?.message === "string") toast.error(data?.message);
        else {
          data?.message.map((item) => {
            toast.error(item);
          });
        }
      });

    if (data?.data?.isSuccess) {
      toast.success(data.data?.message);
      setEmailReg("");
      setPasswordReg("");
      setTelReg("");
      setUsernameReg("");
      setSignUpOpen(false);
    }
  };

  return (
    <div className={signUpOpen ? "signup-area open" : "signup-area"}>
      <div className="sign-up-wrapper">
        <div className="signup-box text-center">
          <div className="signup-text">
            <h3 style={{ color: "#3482A3" }}>Register Account</h3>
          </div>
          <div className="signup-message">
            <img
              src="assets/img/sing-up/sign-up-message.png"
              alt="image not found"
            />
          </div>
        </div>
        <div className="signup-form-wrapper">
          <div className="signup-wrapper">
            <input
              value={telReg}
              required
              type="tel"
              onInput={(e) =>
                (e.target.value = e.target.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/(\..*?)\..*/g, "$1"))
              }
              placeholder="Phone Number"
              onChange={(e) => setTelReg(e.target.value)}
            />
          </div>
          <div className="signup-wrapper">
            <input
              value={emailReg}
              type="text"
              placeholder="Email"
              onChange={(e) => setEmailReg(e.target.value)}
              required
            />
          </div>
          <div className="signup-wrapper">
            <input
              value={usernameReg}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsernameReg(e.target.value)}
              required
            />
          </div>
          <div className="signup-wrapper">
            <input
              value={passwordReg}
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordReg(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn mb-30"
              style={{ backgroundColor: "#3482A3", color: "white" }}
              type="button"
              onClick={handleSignUp}
              disabled={!usernameReg || !passwordReg || !telReg ? true : false}
            >
              Register
            </button>
          </div>
          <div className="sign-social text-center">
            <span>Register with</span>
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
                  id="Path_2121121"
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
                <g id="gmail-01" transform="translate(0 -63.953)">
                  <path
                    id="Path_868365"
                    data-name="Path 863185"
                    d="M1.479,169.418H4.93v-8.381l-2.26-3.946L0,157.339v10.6a1.479,1.479,0,0,0,1.479,1.479Z"
                    transform="translate(0 -89.192)"
                    fill="#3482A3"
                  />
                  <path
                    id="Path_863286"
                    data-name="Path 8683106"
                    d="M395.636,169.418h3.451a1.479,1.479,0,0,0,1.479-1.479v-10.6l-2.666-.248-2.264,3.946v8.381Z"
                    transform="translate(-378.874 -89.192)"
                    fill="#3482A3"
                  />
                  <path
                    id="Path_8322687"
                    data-name="Path 831687"
                    d="M349.816,65.436,347.789,69.3l2.027,2.541,4.93-3.7V66.176A2.219,2.219,0,0,0,351.2,64.4Z"
                    transform="translate(-333.054)"
                    fill="#ffbc00"
                  />
                  <path
                    id="Path_863088"
                    data-name="Path 868038"
                    d="M72.7,105.365l-1.932-4.08L72.7,98.956l5.916,4.437,5.916-4.437v6.409L78.619,109.8Z"
                    transform="translate(-67.773 -33.52)"
                    fill="#ff4131"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_8682519"
                    data-name="Path 868921"
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
        onClick={() => setSignUpOpen(false)}
      ></div>
    </div>
  );
};

export default SignUp;
