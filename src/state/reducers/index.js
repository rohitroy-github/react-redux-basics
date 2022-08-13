// FolderUtility > reducers > Execute the function to perform the action created inside the actionCreator

// index.js > combines all the available reducers and export it to ReduxStore 

import { combineReducers } from "redux";
import amountReducer from './amountReducer'; 

//Combining all the reducers together
const reducers = combineReducers({ 
    amount: amountReducer
}); 

export default reducers;