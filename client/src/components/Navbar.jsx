import React from "react";
import "../styles/Navbar.css";
import Alert from "./Alert";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <h1>Chitikka</h1>
      </nav>
      <Alert alert={props.alert} />
    </>
  );
};

export default Navbar;
