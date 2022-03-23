import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from "./reducer/index.reducer";
import rootSaga from "./saga/rootSaga";


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const middleware  = [sagaMiddleware , thunk]
    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    )
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore;