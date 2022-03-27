import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { addProductData, deleteProductData, fetchProductRequast, updateProductRequest } from '../../common/api/product.api';
import {  addedProduct, deletedProduct, retriedProduct, updatedProduct } from '../action/Product.action';
import * as ActionType from "../ActionType";

function* fetchproduct() {
   try {
      const user = yield call(fetchProductRequast);
      console.log(user);
      yield put(retriedProduct(user.data.data));
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* addProduct(action) {
   try{
      const user = yield call(addProductData, action.payload);
      yield put(addedProduct(action.payload));
   } catch ( error) {
      console.log(error)
   }
}
function* deleteProduct(action) {
   try {
      const Product = yield call(deleteProductData, action.payload)
      yield put(deletedProduct(action.payload))
   } catch (e) {
      console.log(e)
   }
}

function* updateProduct(action) {
   try {
      const Product = yield call(updateProductRequest, action.payload)
      console.log(Product.data)
      yield put(updatedProduct(Product.data))
   } catch (e) {
      console.log(e)
   }
}
export function* productSaga() {
  yield takeEvery(ActionType.FETCH_PRODUCT , fetchproduct);
  yield takeEvery(ActionType.ADD_PRODUCT, addProduct);
  yield takeEvery(ActionType.DELETE_PRODUCT, deleteProduct);
  yield takeEvery(ActionType.UPDATE_PRODUCT, updateProduct);
}