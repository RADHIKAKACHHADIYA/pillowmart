import './App.css';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Home from './container/Home';
import About from './container/About';
import ProductList from './container/ProductList';
import SingleProduct from './container/SingleProduct';
import Blog from './container/Blog';
import SingleBlog from './container/SingleBlog';
import Login from './container/Login';
import Checkout from './container/Checkout';
import Cart from './container/Cart';
import Confirmation from './container/Confirmation';
import Element from './container/Element';
import Contact from './container/Contact';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
      <Route  path='/productList' component={ProductList}/>
      <Route  path='/singleProduct' component={SingleProduct}/>
      <Route  path='/login' component={Login}/>
      <Route  path='/checkout' component={Checkout}/>
      <Route  path='/cart' component={Cart}/>
      <Route  path='/confirmation' component={Confirmation}/>
      <Route  path='/element' component={Element}/>
      <Route  path='/blog' component={Blog}/>
      <Route  path='/singleBlog' component={SingleBlog}/>
      <Route  path='/contact' component={Contact}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
