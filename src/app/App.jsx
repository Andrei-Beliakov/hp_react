import { data } from "../data/data.js";
import { Layout } from "../Layout/Layout";
import { Wrapper } from "../components/wrapper/Wrapper";

function App() {
  console.log(data);
  return (
    <>
      <Layout>
        <Wrapper>Hello! It's Wrapper</Wrapper>
      </Layout>
    </>
  );
}

export default App;
