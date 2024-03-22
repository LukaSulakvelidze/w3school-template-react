import Header from "./components/Header/header";
import "./App.css";
import Container1 from "./components/Main/Container1/main.container1";
import Container2 from "./components/Main/Container2/main.container2";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Header />

      <div className="main">
        <Container1 />
        <Container2 />
      </div>

      <Footer />
  
    </>
  );
}

export default App;
