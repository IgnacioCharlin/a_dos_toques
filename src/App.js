import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartProvider from "./context/CartProvider";
import Cart from "./pages/Cart";

function App() {
  const nombre = "Pedro";
  return (
    <div>
      {/* Al encapsular con el cartProvider todos los valores dentro del context lo va a conocer toda la aplicación */}
      <CartProvider>
        <BrowserRouter>
          <CartProvider></CartProvider>
          <NavBar />
          <Container>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting={nombre} />}
              />
              <Route path="/camiseta/:id" element={<ItemDetailContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer greeting={nombre} />}
              />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
