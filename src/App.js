import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Cart, Products, SingleProduct } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
