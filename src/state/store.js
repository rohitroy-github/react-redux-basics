// FileUtility > store.js > Main ReduxStore which has access to all the states in the entire application

import { applyMiddleware } from "redux";

import thunk from "redux-thunk";

import reducers from "./reducers";

import { createStore } from "redux";

export const store = createStore(reducers, {}, applyMiddleware(thunk))


