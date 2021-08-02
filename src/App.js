import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CartContainer from './components/CartContainer/CartContainer';

import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Router>
          <div className="cont-app">
            <NavBar />
            <Switch>
              
              <Route exact path='/'>
                <ItemListContainer greeting='Productos para su satisfacción' />
              </Route>

              <Route exact path='/category/:categoryid'>
                <ItemListContainer greeting='Productos para su satisfacción' />
              </Route>

              <Route exact path='/details/:productid' component={ItemDetailContainer} />
              
              <Route exact path='/cart' component={CartContainer} />

            </Switch>
          </div>
        </Router>
      </CartContextProvider>
  );
}

export default App;
