import { useState } from "react";
import { data } from "../data/data.js";
import { Layout } from "../Layout/Layout";
import { Wrapper } from "../components/wrapper/Wrapper";
import { Card } from "../components/card/Card.jsx";

function App() {
  const [inputValue, setInput] = useState("");
  const [selectValue, setSelect] = useState("");
  const [likedArr, setLikedArr] = useState([]);
  console.log(likedArr);
  const likeOn = (name) => {
    setLikedArr([...likedArr, name]);
  };
  const likeOff = (name) => {
    setLikedArr(likedArr.filter((el) => el !== name));
  };

  let selectData = data
    .filter((el) =>
      el.house.trim().toLowerCase().includes(selectValue.toLowerCase())
    )
    .filter((el) =>
      el.name.trim().toLowerCase().includes(inputValue.toLowerCase())
    );

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
      </Layout>
    </>
  );
}

export default App;
