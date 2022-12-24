import { Container } from 'react-bootstrap';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const nombre = 'Pedro';
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Container>
          <ItemListContainer greeting={nombre} />
        </Container>
      </main>
    </div>
  );
}

export default App;
