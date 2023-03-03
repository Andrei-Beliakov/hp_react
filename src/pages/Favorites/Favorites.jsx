import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../components/wrapper/Wrapper";
import { Card } from "../../components/card/Card";
import s from "./Favorites.module.css";

export const Favorites = ({ likeOn, likeOff, likedArr, likeSelectData }) => {
  return (
    <>
      <div className={s.header}>
        <h1 className={s.header__title}>Liked ones</h1>
        <h2 className={s.header__subtitle}>
          Your favorite characters from the Harry Potter universe.
        </h2>
      </div>
      <Link to="/" className={s.back__link}>
        ← Back To All
      </Link>

      <Wrapper>
        {likeSelectData.map((el, i) => (
          <Card
            isLiked={likedArr.includes(el.name)}
            likeOn={likeOn}
            likeOff={likeOff}
            key={i}
            image={el.image}
            name={el.name}
            actor={el.actor}
            gender={el.gender}
            house={el.house}
            wand={el.wand}
            alive={el.alive ? "yes" : "no"}
          />
        ))}
      </Wrapper>
    </>
  );
};
