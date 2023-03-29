import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Error, Cart, Products, SingleProduct } from "./pages";
import { Navbar, Footer } from "./components";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
