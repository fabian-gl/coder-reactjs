import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import CartContextProvider from './context/CartContext';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';


function App() {
  return (
      <CartContextProvider>
        <Router>
            <div className="cont-app">
              <NavBar />
              <Switch>

                <Route exact path='/' component={ItemListContainer} />
                <Route exact path='/category/:categoryid' component={ItemListContainer} />
                <Route exact path='/details/:productid' component={ItemDetailContainer} />
                <Route exact path='/cart' component={CartContainer} />

              </Switch>
            </div>
          </Router>
        </CartContextProvider>
  );
}

export default App;
