import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from "./reducer/index.reducer";
import rootSaga from "./saga/rootSaga";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['product']
}
const saga = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
    // const sagaMiddleware = createSagaMiddleware()
    const middleware  = [saga, thunk]
    const store = createStore(
        persistedReducer,
        applyMiddleware(...middleware)
    )
    let persistor = persistStore(store)

    saga.run(rootSaga)
    
    return {store, persistor};
}

export default configureStore;