import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './componets/Layout/Layout'
import Daseborad from './container/Daseborad/Daseborad'
import User from './container/User/User'
import Product from './container/Product/Product'
import { Provider } from 'react-redux';
import configureStore from './redux/store';

function App() {
  const store = configureStore();

  return (
    <>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path='/daseborad' component={Daseborad} />
            <Route path='/user' component={User} />
            <Route path='/product' component={Product} />
          </Switch>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
