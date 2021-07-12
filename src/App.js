import NavBar from './components/NavBar';
import DummyParagraph from './components/DummyParagraph';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Hola, mundo!'/>
      <DummyParagraph/>
      <DummyParagraph/>
      <DummyParagraph/>
      <DummyParagraph/>
    </div>
  );
}

export default App;
