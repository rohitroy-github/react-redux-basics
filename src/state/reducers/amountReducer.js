// Reducer to manipulate the account balance [accountBalance === state]

const reducer = (state = 0, action) => {
    
  // If action === DEPOSIT
  if (action.type === "DEPOSIT") {
    return state + action.payload;
  }

  // If action === WITHDRAW
  else if (action.type === "WITHDRAW") {
    return state - action.payload;
  }

  // If action === none
  else {
    //No change in state === accountBalance
    return state;
  }
};

export default reducer; 
