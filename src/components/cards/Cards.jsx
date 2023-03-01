import React from "react";
import s from "./Cards.module.css";

export const Cards = ({
  id,
  image,
  name,
  actor,
  gender,
  house,
  wand,
  alive,
}) => {
  return (
    <>
      <div className={s.cards__item}>
        <img src={image} alt="" />
        <div className={s.item__text}>
          <p className={s.item__title}>{name}</p>
          <p className={s.item__data}>Actor: {actor}</p>
          <p className={s.item__data}>Gender: {gender}</p>
          <p className={s.item__data}>House: {house}</p>
          <p className={s.item__data}>Wand core: {wand.core}</p>
          <p className={s.item__data}>Alive: {alive}</p>
        </div>
      </div>
    </>
  );
};
