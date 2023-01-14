import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const nombre = "Pedro";
  return (
    <div>
          <BrowserRouter>
          <NavBar />
          <Container>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={nombre} />}/>
              <Route path='/camiseta/:id' element={<ItemDetailContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={nombre} />}/>
            </Routes>
            </Container>
          </BrowserRouter>
        
    </div>
  );
}

export default App;
