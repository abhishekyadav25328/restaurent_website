import "./App.css";
// import Layout from './component/Layout';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "../src/pages/Home";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Menupage from "./pages/Menupage";
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/contect" element={<Contect />}/>
          <Route path="/menu" element={<Menupage />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
