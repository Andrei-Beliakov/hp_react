import React from "react";
import { Header } from "./Header/Header";
import s from "../Layout/Layout.module.css";

export const Layout = ({
  children,
  inputValue,
  setInput,
  selectValue,
  setSelect,
}) => {
  return (
    <>
      <div className={s.container}>
        <Header
          inputValue={inputValue}
          setInput={setInput}
          selectValue={selectValue}
          setSelect={setSelect}
        />
        <main>{children}</main>
      </div>
    </>
  );
};
