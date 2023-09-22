import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import DrawerMenu from "../molecules/DrawerMenu";

import styles from "./Default.module.css"

export default function Default(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <DrawerMenu open={open} setOpen={setOpen} />
      <div className={styles.appHeader}>
        <div className={styles.logo}>
          <Link to="/">
          <img src={logo} className="responsive" alt="" />
          </Link>
        </div>
        <div className="app-header__menu">
          <i onClick={() => setOpen(true)} className="fa fa-bars"></i>
        </div>
      </div>
      {props.children}
      <div className={styles.appFooter}>Módulo React :: Full Stack Development</div>
    </div>
  );
}