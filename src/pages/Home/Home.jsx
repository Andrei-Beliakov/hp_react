import React from "react";
import { Layout } from "../../Layout/Layout";
import { Wrapper } from "../../components/wrapper/Wrapper";
import { Card } from "../../components/card/Card";
import { Button } from "../../components/Button/Button";

export const Home = ({
  inputValue,
  setInput,
  selectValue,
  setSelect,
  likeOn,
  likeOff,
  likedArr,
  selectData,
}) => {
  return (
    <>
      <Layout
        inputValue={inputValue}
        setInput={setInput}
        selectValue={selectValue}
        setSelect={setSelect}
      >
        <Wrapper>
          {selectData.map((el, i) => (
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
        <Button />
      </Layout>
    </>
  );
};
