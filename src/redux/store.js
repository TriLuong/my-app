import { createStore } from "redux";
import loginReducer from "./Login/Login.reducer";

const store = createStore(loginReducer);
export default store;
