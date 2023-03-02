import React from "react";
import s from "./Button.module.css";
import like_img from "./like.svg";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <>
      <div className={s.btn}>
        <Link to="/favorites">
          <div className={s.btn__wrap}>
            <img className={s.btn__img} src={like_img} /> <p>Show Liked</p>
          </div>
        </Link>
      </div>
    </>
  );
};
