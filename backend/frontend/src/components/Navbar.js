import React, { useContext } from "react";
import logo from "../img/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

export default function Navbar({ login }) {
  const { setModalOpen } = useContext(LoginContext);
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/createPost">Create Post</Link>
          <Link style={{ marginLeft: "20px" }} to="/followingpost">
            My Following
          </Link>
          <Link to={""}>
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>
              Log Out
            </button>
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link to="/signup">
            <li>SignUp</li>
          </Link>
          <Link to="/signin">
            <li>SignIn</li>
          </Link>
        </>,
      ];
    }
  };


  const loginStatusMobile = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <Link to="/">
            <li>
              <span>
              <i class="fa-solid fa-house"></i>
              </span>
            </li>
          </Link>

          <Link to="/profile">
            <li>
              <span><i class="fa-solid fa-user"></i></span>
            </li>

          </Link>
          <Link to="/createPost"><li><span>
          <i class="fa-solid fa-plus"></i>
          </span></li></Link>
          <Link style={{ marginLeft: "20px" }} to="/followingpost">
            <li>
              <span>
              <i class="fa-brands fa-internet-explorer"></i>
              </span>
            </li>
          </Link>
          <Link to={""}>
            <li onClick={() => setModalOpen(true)}>
              <span >
              <i class="fa-solid fa-right-from-bracket"></i>
              </span>
            </li>
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link to="/signup">
            <li>SignUp</li>
          </Link>
          <Link to="/signin">
            <li>SignIn</li>
          </Link>
        </>,
      ];
    }
  };

  return (
    <div className="navbar">
      <img id="insta-logo" src={logo} alt="" />
      <ul className="nav-menu">{loginStatus()}</ul>
      <ul className="nav-mobile">{loginStatusMobile()}</ul>

    </div>
  );
}
