import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
