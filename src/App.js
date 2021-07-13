import NavBar from './components/NavBar/NavBar';
import DummyParagraph from './components/DummyParagraph/DummyParagraph';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Hola, mundo!' />

      <DummyParagraph/>
      <DummyParagraph/>
      <DummyParagraph/>
      <DummyParagraph/>
    </div>
  );
}

export default App;
