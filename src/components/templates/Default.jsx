import React from "react";

import logo from "../../images/logo.svg";

export default function Default(props) {
  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>
      {props.children}
      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}