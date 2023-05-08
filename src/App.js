// pages 
import Home from "./pages/Home";
import Details from "./pages/Details";

// components
import Navbar from './components/Layout/Navbar';
import Banner from "./components/Layout/Banner"
import { Route, Routes } from "react-router-dom";
import CarShop from "./pages/CarShop";
import  HelperPage  from "./pages/HelperPage";



function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/avtosalonlar" element={<CarShop />} />
        <Route path="/helperpage" element={<HelperPage />} />

      </Routes>



    </div>
  );
}

export default App;
