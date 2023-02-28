import React from "react";
import { Header } from "./Header/Header";
import s from "../Layout/Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <>
      <div className={s.container}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};
