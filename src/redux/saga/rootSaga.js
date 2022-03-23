 import { all } from 'redux-saga/effects';
import { productSaga } from './product.saga';

export default function* RootSaga() {
    yield all([
        productSaga()
    ])
}