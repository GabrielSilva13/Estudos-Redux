import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
// Esse é o estado Global do Redux

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

//sagaMiddleware.run();  <-- aqui é aonde se passa as funções do saga

export default store;
