// import React from "react";
import { Link } from "react-router-dom";
// import { useCart } from "../../hooks/useCart";
import classes from "./header.module.css";
// import { useAuth } from "../../hooks/useAuth";

const user = {
  name: "Jhon",
};

export default function Headerr() {
  //   const { user, logout } = useAuth();

  const logout = () => {};

  const cart = {
    totalCount: 10,
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Food Mine!
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
