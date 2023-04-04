import { combineReducers } from "redux";
import cart from "./cart/reducer";
//Aqui temos uma maneira mais controlada de retornar exatamente a função que estamos esperando

export default combineReducers({
  cart,
});
