import React from "react";
import "../styles/Alert.css";

const Alert = (props) => {
  return (
    <>
      {props.alert && (
        <div className={`alert ${props.alert.type}`}>{props.alert.msg}</div>
      )}
    </>
  );
};

export default Alert;
