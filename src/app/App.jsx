import { data } from "../data/data.js";
import { Layout } from "../Layout/Layout";
import { Wrapper } from "../components/wrapper/Wrapper";
import { Cards } from "../components/cards/Cards.jsx";

function App() {
  return (
    <>
      <Layout>
        <Wrapper>
          {data.map((el, i) => (
            <Cards
              id={i}
              image={el.image}
              name={el.name}
              actor={el.actor}
              gender={el.gender}
              house={el.house}
              wand={el.wand}
              alive={el.alive}
            />
          ))}
        </Wrapper>
      </Layout>
    </>
  );
}

export default App;
