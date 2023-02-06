import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useProducts } from "../../provider/ProductProvider";
import { actionTypes } from "../../state/ProductState/actionTypes";

const MyNav = () => {
  const {
    state: { loading, products, error, cart },
  } = useProducts();

  const {dispatch} = useProducts()

  const slug = useRouter().pathname;
  return (
    <nav className="navbar bg-warning navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          Dipta
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${slug == "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/top-rated"
                className={`nav-link ${slug == "/top-rated" ? "active" : ""}`}
              >
                Top rated
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${slug == "/about" ? "active" : ""}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/cart"
                className={`nav-link position-relative ${
                  slug == "/cart" ? "active" : ""
                }`}
              >
                <span style={{fontSize: "20px"}}><i class="ri-shopping-bag-line"></i></span>
                <span class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
                {/* <span style={{ fontSize: "10px" }}>({cart.length})</span>{" "} */}
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={()=> dispatch({type: actionTypes.CHANGE_THEME})} className=" nav-link">Toggle</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
