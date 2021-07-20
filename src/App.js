import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DummyParagraph from './components/DummyParagraph/DummyParagraph';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a mi tienda' />

      <DummyParagraph/>
      <DummyParagraph/>
      <DummyParagraph/>
      <DummyParagraph/>
    </div>
  );
}

export default App;
