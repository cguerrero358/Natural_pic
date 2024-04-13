import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { BrowserRouter } from "react-router-dom";
import { FotosFavoritasProvider } from "./context/FotosFavoritas";

const App = () => {
  return (
    <FotosFavoritasProvider >
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FotosFavoritasProvider>
  );
};

export default App;