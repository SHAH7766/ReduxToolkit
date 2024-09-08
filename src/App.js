import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Screens/Products";
import DetailPage from "./Screens/DetailPage";
import Cart from "./Screens/Cart";
import Spinner from "./Components/Spinner";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/detail/:id" element={<DetailPage/>} />
          <Route path="/cart" element={<Cart/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
