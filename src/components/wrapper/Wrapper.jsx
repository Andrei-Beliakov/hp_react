import React from "react";
import s from "./Wrapper.module.css";

export const Wrapper = ({ children }) => {
  return <div className={s.cards__wrapper}>{children}</div>;
};
