import { Route, Routes } from "react-router-dom";
// pages 
import Home from "./pages/Home";
import Details from "./pages/Details";
import HelperPage from "./pages/HelperPage";
import CarShop from "./pages/CarShop";
import FavoritePage from "./pages/FavoritePage";

// components
import Navbar from './components/Layout/Navbar';
import Banner from "./components/Layout/Banner";
import Footer from "./components/Layout/Footer";


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
        <Route path="/favoritepage" element={<FavoritePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
