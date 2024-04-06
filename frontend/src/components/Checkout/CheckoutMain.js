import React, { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import axios from "../../api/axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CheckoutMain = () => {
  const [BankTransfer, setBankTransfer] = useState(true);
  const [courseCheckout, setCourseCheckout] = useState([]);
  const [statusCheckOut, setStatusCheckout] = useState();
  const [nameOrder, setNameOrder] = useState();
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const GET_CHECKOUT_URL = "orders";
  function handleCheckOut() {
    router.push("/product");
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    localStorage.removeItem("id-order");

    toast.success(statusCheckOut);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const idOrder = localStorage.getItem("id-order");

    setTotal(localStorage.getItem("total"));

    axios
      .get(`${GET_CHECKOUT_URL}/${idOrder}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCourseCheckout(res.data.data.items);
        console.log("check");
        setStatusCheckout(res.data.data.status);
        setNameOrder(res.data.data.customer.fullName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Breadcrumb
        breadcrumbTitle="Checkout"
        breadcrumbSubTitle="Checkout"
      />

      <section className="coupon-area pt-100 pb-30" style={{ textAlign: 'center' }}>
        <h1 className="pl-200 text-info">Hi {nameOrder} !!</h1>
      </section>

      <section className="checkout-area pb-70">
        <div className="container" >
        <div className="row justify-content-center">
              <div className="col-lg-6">
                 <form action="#">
                <div className="your-order mb-30 center">
                  <h3 style={{ textAlign: 'center', color: '#3482A3' }}>Your Order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Price</th>
                        </tr>
                      </thead>
                      {courseCheckout?.map((item) => (
                        <tbody key={item.title}>
                          <tr className="cart_item">
                            <td className="product-name">
                              {item.course.title}
                            </td>
                            <td className="product-total">
                              <span className="amount">
                                {item.course.price} đ
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      ))}

                      <tfoot>
                        <tr className="shipping">
                          <th>Payment methods</th>
                          <td>
                            <ul>
                              <li>
                                <input
                                  type="radio"
                                  name="Shipping"
                                  onClick={() => setBankTransfer(true)}
                                  defaultChecked
                                />
                                <label>Bank transfer</label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  name="Shipping"
                                  onClick={() => setBankTransfer(false)}
                                />
                                <label>Momo</label>
                              </li>
                              <li></li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td>
                            <strong>
                              <span className="amount">{total} đ</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  {BankTransfer ? (
                    <div className="payment-method">
                      <div className="accordion" id="checkoutAccordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="checkoutOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#bankOne"
                              aria-expanded="true"
                              aria-controls="bankOne"
                            >
                              VietComBank
                            </button>
                          </h2>
                          <div
                            id="bankOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="checkoutOne"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                              - Account number: 012123123123
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="paymentTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#payment"
                              aria-expanded="false"
                              aria-controls="payment"
                            >
                              TechComBank
                            </button>
                          </h2>
                          <div
                            id="payment"
                            className="accordion-collapse collapse"
                            aria-labelledby="paymentTwo"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                            Account number: 1234234234
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="paypalThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#paypal"
                              aria-expanded="false"
                              aria-controls="paypal"
                            >
                              MBBank
                            </button>
                          </h2>
                          <div
                            id="paypal"
                            className="accordion-collapse collapse"
                            aria-labelledby="paypalThree"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                            Account number: 1345345345
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="payment-method">
                      <div className="accordion" id="checkoutAccordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="checkoutOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#bankOne"
                              aria-expanded="true"
                              aria-controls="bankOne"
                            >
                             Momo Transfer
                            </button>
                          </h2>
                          <div
                            id="bankOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="checkoutOne"
                            data-bs-parent="#checkoutAccordion"
                          >
                            <div className="accordion-body">
                            Phone number: 1232323123
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="order-button-payment mt-20">
                    <button
                      type="submit"
                      className="edu-btn"
                      onClick={() => handleCheckOut()}
                    >
                      Payment Transferred
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutMain;
