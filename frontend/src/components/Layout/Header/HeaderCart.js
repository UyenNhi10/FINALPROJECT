import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { CartContext } from "../../../contexts/Cart";
import axios from "../../../api/axios";

const HeaderCart = ({ setCartOpen, cartOpen }) => {
  const router = useRouter();
  const [phoneUser, setPhoneUser] = useState();
  const [fullNameUser, setFullnameUser] = useState();
  const [storedCart, setStoredCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const ORDER_URL = "/orders";
  const GET_PROFILE_URL = "auth/profile";

  // const storedCart =
  //   typeof window !== "undefined" ? localStorage.getItem("cart") : null;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setStoredCart(JSON.parse(localStorage.getItem("cart")));
    if (token) {
      axios
        .get(GET_PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFullnameUser(res.data.data.fullName);
          setPhoneUser(res.data.data.phoneNumber);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cartOpen]);

  async function handleCheckOut() {
    const token = localStorage.getItem("token");
    setLoading(true);
    var allIdCart = [];
    var courseId_Object = {};

    if (token && storedCart) {
      for (var i = 0; i < storedCart?.length; i++) {
        courseId_Object.course = storedCart[i]._id;
        allIdCart.push(courseId_Object);
      }
      console.log(allIdCart);
      await axios
        .post(
          ORDER_URL,
          {
            customerInfo: {
              phoneNumber: phoneUser,
              fullName: fullNameUser,
            },
            items: [...allIdCart],
            paymentType: "BANKING",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem("id-order", res.data.data._id);
        })
        .catch((err) => {
          console.log(err);
        });
      router.push("/checkout");
      setCartOpen(false);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="cartmini__area">
        <div
          className={
            cartOpen ? "cartmini__wrapper opened" : "cartmini__wrapper"
          }
        >
          <div className="cartmini__title">
            <h4>Cart</h4>
          </div>
          <div className="cartmini__close">
            <button
              type="button"
              className="cartmini__close-btn"
              onClick={() => setCartOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <CartContext.Consumer>
            {({ removeFromCart, total, cartItems }) => (
              <>
                <div className="cartmini__widget">
                  {cartItems?.map((item) => (
                    <div className="cartmini__inner" key={item._id}>
                      <ul>
                        <li>
                          <div className="cartmini__thumb">
                            <img src={item.thumbnail} alt="image" />
                          </div>
                          <div className="cartmini__content">
                            <h5>
                              <a href="#">{item.title}</a>
                            </h5>
                            <div className="product__sm-price-wrapper">
                              <span className="product__sm-price">
                                {item.price} đ
                              </span>
                            </div>
                          </div>
                          <button
                            className="fal fa-times ml-30"
                            onClick={() => removeFromCart(item._id)}
                          ></button>
                        </li>
                      </ul>
                    </div>
                  ))}
                  <div className="cartmini__checkout">
                    <div className="cartmini__checkout-title mb-30">
                      <h4>Total:</h4>
                      <span>{total} đ</span>
                    </div>
                  </div>
                  {loading ? (
                    <button
                      className="video-cart-btn ml-60"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      {"  "}
                      Processing. . . . .
                    </button>
                  ) : (
                    <>
                      {cartItems.length !== 0 ? (
                        <button
                          className="video-cart-btn ml-60"
                          onClick={() => handleCheckOut(storedCart)}
                        >
                          <Link href="/checkout">
                            <i className="fa fa-credit-card"></i>
                          </Link>{" "}
                          Pay Now
                        </button>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </div>
              </>
            )}
          </CartContext.Consumer>
        </div>
      </div>
    </>
  );
};

export default HeaderCart;
