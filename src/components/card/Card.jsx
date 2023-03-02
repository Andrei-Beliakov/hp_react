import React from "react";
import s from "./Card.module.css";
import like_img from "./like.svg";
import dislike_img from "./dislike.svg";

export const Card = ({
  image,
  name,
  actor,
  gender,
  house,
  wand,
  alive,
  isLiked,
  likeOn,
  likeOff,
}) => {
  return (
    <>
      <div className={s.cards__item}>
        <button
          className={s.item__btn}
          onClick={() => {
            // console.log(`${!isLiked}_like`);
            console.log(isLiked);
            isLiked ? likeOff(name) : likeOn(name);
          }}
        >
          <img className={s.like__img} src={isLiked ? like_img : dislike_img} />
        </button>

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
