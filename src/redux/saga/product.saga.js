import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { addProductData, fetchProductRequast } from '../../common/api/product.api';
import * as ActionType from "../ActionType";

function* fetchproduct() {
   try {
      const user = yield call(fetchProductRequast);
      yield put(user.data.data);
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
function* addProduct() {
   try{
      const user = yield call(addProductData);
      yield postMessage(user.data.data);
   } catch ( error) {
      console.log(error)
   }
}

export function* productSaga() {
  yield takeEvery(ActionType.FETCH_PRODUCT , fetchproduct);
  yield takeEvery(ActionType.ADD_PRODUCT, addProduct);
}