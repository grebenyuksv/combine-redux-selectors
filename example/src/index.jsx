import ReactDOM from "react-dom";
import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import combineSelectors from "combine-redux-selectors";
import store from "./store";
import Counter from "./components/Counter";

const root = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    root
);
