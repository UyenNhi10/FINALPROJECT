import React, { useEffect, useState } from "react";

import { faCashRegister, faChartLine } from "@fortawesome/free-solid-svg-icons";

import { Col, Row } from "@themesberg/react-bootstrap";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
} from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { useHistory } from "react-router-dom";
import axios from "../../api/axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let history = useHistory();
  const [qualityUsers, setQualityUsers] = useState(0);
  const [qualityOder, setQualityOder] = useState(0);
  const [allOrder, setAllOrder] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("tokenAdmin");
    if (!token) {
      history.push("/sign-in");
    }
  });

  const getAllOrders = async () => {
    const token = localStorage.getItem("tokenAdmin");
    await axios
      .get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setQualityOder(res.data.data.length);
        setAllOrder(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Unauthorized") {
          history.push("/sign-in");
        }
      });
  };

  useEffect(() => {
    CalRevenue();
  }, [allOrder]);

  function CalRevenue() {
    var revenue = 0;
    revenue = allOrder?.map((item) => {
      if (item.status === "COMPLETED") {
        setRevenue((revenue += item.totalPrice));
        return revenue;
      }
      return revenue;
    });
  }

  const getAllUser = async () => {
    const token = localStorage.getItem("tokenAdmin");
    await axios
      .get(
        "http://localhost:3002/users?page=0&pageSize=25&sortType=desc&sortField=updatedAt&isPurchased=false",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setQualityUsers(res.data.data.length);
        console.log("check", res);
        setListUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUser();
    getAllOrders();
  }, []);
  return (
    <>
 <style>
  {`
    /* Widgets */
    .counter-widget,
    .sales-widget,
    .circle-chart-widget,
    .team-members-widget,
    .progress-track-widget,
    .bar-chart-widget {
      background-color: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      transition: transform 0.3s ease-in-out;
    }

    .counter-widget:hover,
    .sales-widget:hover,
    .circle-chart-widget:hover,
    .team-members-widget:hover,
    .progress-track-widget:hover,
    .bar-chart-widget:hover {
      transform: translateY(-5px);
    }

    .sales-widget .value {
      font-size: 28px;
      font-weight: bold;
      color: #343a40;
    }

    .sales-widget .title {
      font-size: 16px;
      color: #6c757d;
    }

    .circle-chart-widget {
      text-align: center;
    }

    .team-members-widget .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .progress-track-widget .order {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .progress-track-widget .order .status {
      font-weight: 600;
    }

    .bar-chart-widget .chart {
      height: 300px;
    }

    /* Tables */
    .page-visits-table {
      background-color: #fff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }

    .page-visits-table th {
      background-color: #dee2e6;
    }

    .page-visits-table tbody tr:hover {
      background-color: #e2e6ea;
    }

    /* Responsive Classes */
    @media (max-width: 576px) {
      .sales-widget .value {
        font-size: 24px;
      }
    }

    @media (max-width: 768px) {
      .col-sm-6 {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }

    @media (max-width: 992px) {
      .col-md-4 {
        flex: 0 0 50%;
        max-width: 50%;
      }
    }
  `}
</style>


      <Row className="justify-content-md-center" >
        <Col xs={12} className="mb-4 d-none d-sm-block">
        <div className="sales-widget" style={{
                                backgroundColor: "#A9A9A9",
                                color: "white",
                              }}>
          <SalesValueWidget
            title="Revenue" 
            value={`${revenue} đ`}
            percentage={0}
            
            
          />
        </div>
        </Col>
        <Col xs={12} className="mb-4 d-sm-none"  >
          <SalesValueWidgetPhone
            title="Revenue"
            value={`${revenue} đ`}
            percentage={0}
            
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
        <div className="counter-widget">
          <CounterWidget
            category="Members Participated"
            title={qualityUsers}
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
       </div>
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
        <div className="counter-widget">
          <CounterWidget
            category="Product Purchased"
            title={qualityOder}
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
          </div>
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
        <div className="circle-chart-widget">
          <CircleChartWidget
            title="Traffic By Device"
            data={trafficShares}
          />
            </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                <div className="page-visits-table">
                  <PageVisitsTable listUsers={listUsers} />
                </div>
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                <div className="team-members-widget">
                  <TeamMembersWidget />
                  </div>
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                <div className="progress-track-widget">
                  <ProgressTrackWidget ordersList={allOrder} />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                <div className="bar-chart-widget">
                  <BarChartWidget
                    title="Total Products Purchased"
                    value={452}
                    percentage={18.2}
                    data={totalOrders}
                  />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
