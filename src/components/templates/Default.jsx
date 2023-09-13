import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import DrawerMenu from "../molecules/DrawerMenu";

export default function Default(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <DrawerMenu open={open} setOpen={setOpen} />
      <div className="app-header">
        <div className="app-header__logo">
          <Link to="/">
          <img src={logo} className="responsive" alt="" />
          </Link>
        </div>
        <div className="app-header__menu">
          <i onClick={() => setOpen(true)} className="fa fa-bars"></i>
        </div>
      </div>
      {props.children}
      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}