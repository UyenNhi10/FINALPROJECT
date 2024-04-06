import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

import {
  faChartPie,
  faCog,
  faHandHoldingUsd,
  faSignOutAlt,
  faTimes,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Badge,
  Image,
  Button,
  Dropdown,
  Accordion,
  Navbar,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button
            as={Nav.Link}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />
              </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">{children}</Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
            ) : null}
            {image ? (
              <Image
                src={image}
                width={20}
                height={20}
                className="sidebar-icon svg-icon"
              />
            ) : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
   <style>
  {`
/* Định nghĩa màu sắc và font chữ */
.sidebar {
  background-color: #3482A3 /* Màu nền */
  color: #ffffff; /* Màu văn bản */
  font-family: 'Roboto', sans-serif; /* Font chữ */
}

/* Hiệu ứng hover cho các mục nav */
.sidebar .nav-link:hover {
  background-color: #3482A3 /* Màu nền khi hover */
  color: #ffffff; /* Màu văn bản khi hover */
}

/* Thêm hiệu ứng khi click vào một mục nav */
.sidebar .nav-link:active {
  background-color: #3482A3 /* Màu nền khi click */
  color: #ffffff; /* Màu văn bản khi click */
}

/* Thêm gradient cho background */
.sidebar-inner {
  background: linear-gradient(to right, #3482A3, 	#3482A3); /* Gradient từ trái sang phải */
}

/* Hiệu ứng cho logo */
.navbar-brand-light {
  transition: transform 0.3s ease; /* Hiệu ứng chuyển động */
}
.navbar-brand-light:hover {
  transform: scale(1.05); /* Phóng to khi hover */
}
  `}
</style>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand
          className="me-lg-5"
          as={Link}
          to={Routes.DashboardOverview.path}
        >
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/05/Apple-Store-Online-4.jpeg"
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h6>Hi, Admin</h6>
                  <Button
                    as={Link}
                    variant="secondary"
                    size="xs"
                    to={Routes.Signin.path}
                    className="text-dark"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />{" "}
                    Logout
                  </Button>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem
                title="Overview"
                link={Routes.DashboardOverview.path}
                icon={faChartPie}
              />

              <NavItem
                title="Manage Order"
                icon={faHandHoldingUsd}
                link={Routes.Transactions.path}
              />
              <NavItem
                title="Add Product"
                icon={faCog}
                link={Routes.CreateCourse.path}
              />

              <NavItem
                title="Manage Product"
                icon={faBookmark}
                link={Routes.Course.path}
              />

              <NavItem
                title="Manage Category"
                icon={faListAlt}
                link={Routes.Category.path} // Sử dụng đúng đường dẫn từ Routes
              />

              <Dropdown.Divider className="my-3 border-indigo" />
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
