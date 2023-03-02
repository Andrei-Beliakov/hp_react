import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { data } from "../data/data.js";
import { Home } from "../pages/Home/Home";
import { Favorites } from "../pages/Favorites/Favorites";

function App() {
  const [inputValue, setInput] = useState("");
  const [selectValue, setSelect] = useState("");
  const [likedArr, setLikedArr] = useState([]);

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

  let likeSelectData = selectData.filter((el) => likedArr.includes(el.name));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            inputValue={inputValue}
            setInput={setInput}
            selectValue={selectValue}
            setSelect={setSelect}
            likeOn={likeOn}
            likeOff={likeOff}
            likedArr={likedArr}
            selectData={selectData}
          />
        }
      />
      <Route
        path="/favorites"
        element={
          <Favorites
            setSelect={setSelect}
            likeOn={likeOn}
            likeOff={likeOff}
            likedArr={likedArr}
            likeSelectData={likeSelectData}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
