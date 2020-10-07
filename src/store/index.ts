import algorithmsSlice from "./slices/algorithms/algorithmsSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    algorithms: algorithmsSlice
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
});

export default store