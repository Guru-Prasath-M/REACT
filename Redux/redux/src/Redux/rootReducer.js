import { combineReducers } from "redux";
import {messageReducer} from './message/message.reducer';
import {productReducer} from './product/product.reducer';
let rootReducer = combineReducers({'message':messageReducer,
                                   'product':productReducer})

export {rootReducer}