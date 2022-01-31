import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from '../src/componets/Layout/Layout'
import Daseborad from './container/User/Daseborad/Daseborad'
import User from './container/User/User'
import Product from './container/User/Product/Product'


function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path='/daseborad' component={Daseborad} />
          <Route path='/user' component={User} />
          <Route path='/product' component={Product} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
