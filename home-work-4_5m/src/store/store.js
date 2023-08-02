import { legacy_createStore as createStore } from "redux";
import { CreateReducer } from "./CreateReducer";

export const store = createStore(CreateReducer);
