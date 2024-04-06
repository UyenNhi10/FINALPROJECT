import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const CartMain = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <main>
      <Breadcrumb
        breadcrumbTitle="My Cart"
        breadcrumbSubTitle="Cart"
      />

      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="table-content table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail">
                        <Link href="/course-details">
                          <button>
                            <img
                              src="assets/img/products/product-thumb-01.png"
                              alt="img not found"
                            />
                          </button>
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link href="/course-details">
                          <button>Edit Video</button>
                        </Link>
                      </td>
                      <td className="product-price">
                        <span className="amount">400.000 đ</span>
                      </td>
                      <td className="product-quantity text-center">
                        <div className="product-quantity mt-10 mb-10">
                          <div className="product-quantity-form">
                            <form action="#">
                              <button
                                type="button"
                                className="cart-minus"
                                onClick={handleDecrement}
                              >
                                <i className="far fa-minus"></i>
                              </button>
                              <p className="cart-input">{count}</p>
                              <button
                                type="button"
                                className="cart-plus"
                                onClick={handleIncrement}
                              >
                                <i className="far fa-plus"></i>
                              </button>
                            </form>
                          </div>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="amount">400.000 đ</span>
                      </td>
                      <td className="product-remove">
                        <a href="#">
                          <i className="fa fa-times"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="coupon-all">
                    <div className="coupon d-flex align-items-center">
                      <input
                        id="coupon_code"
                        className="input-text"
                        name="coupon_code"
                        placeholder="Mã Giảm Giá"
                        type="text"
                      />
                      <button
                        className="edu-btn"
                        name="apply_coupon"
                        type="submit"
                      >
                        Áp Dụng Phiếu Giảm Giá
                      </button>
                    </div>
                    <div className="coupon2">
                      <button
                        className="edu-btn"
                        name="update_cart"
                        type="submit"
                      >
                        Cập Nhật Giỏ Hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 ml-auto">
                  <div className="cart-page-total">
                    <h2>Tổng Đơn Hàng</h2>
                    <ul className="mb-20">
                      <li>
                        Tổng <span>780.000 đ</span>
                      </li>
                    </ul>
                    <Link href="/checkout">
                      <button className="edu-border-btn">Checkout</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartMain;
