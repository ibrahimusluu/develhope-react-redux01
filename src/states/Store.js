import { createStore } from "redux";
import { counterReducer } from "./CounterState";

export const store = createStore(counterReducer);
console.log(store);
