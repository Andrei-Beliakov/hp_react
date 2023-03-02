import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../components/wrapper/Wrapper";
import { Card } from "../../components/card/Card";

export const Favorites = ({ likeOn, likeOff, likedArr, likeSelectData }) => {
  return (
    <>
      <div>
        <Link to="/">BACK</Link>
      </div>
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
